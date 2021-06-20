import http from "../helpers/http-common";
import { EpochToDate } from '../helpers/datetime';

class PostDataService {
  storagekey = 'reddit-data';
  themekey = 'reddit-theme';

  async getPostsAPI() {
    let data = localStorage.getItem(this.storagekey);

    try {
      if (data === null) {
        //@TODO: this url must be in env file
        data = await http.get(`https://www.reddit.com/r/All/hot.json?limit=50`);

        data = data.data.data.children.map(item => {
          return {
            id: item.data.id,
            author: item.data.author,
            title: item.data.title,
            url: item.data.url,
            content: item.data.selftext,
            thumbnail: item.data.thumbnail,
            image: item.data.url_overridden_by_dest,
            num_comments: item.data.num_comments,
            ups: item.data.ups,
            created_utc: item.data.created_utc,
            timestamp: EpochToDate(item.data.created_utc),
            secure_media: item.data.secure_media
          };
        });

        localStorage.setItem(this.storagekey, JSON.stringify(data))
      }

      data = (typeof data === 'string' ? JSON.parse(data) : data);
    } catch (err) {
      this.handleError(err);
      data = []; //Prevent broken UI
    }

    return data;
  }

  dismissAll() {
    localStorage.removeItem(this.storagekey);
  }

  dismissById(idPost) {
    var data = localStorage.getItem(this.storagekey);
    data = JSON.parse(data).filter((itemA, itemB) => {
      return (itemA.id !== idPost ? itemA : null)
    });
    localStorage.setItem(this.storagekey, JSON.stringify(data))
    return data;
  }

  getTheme() {
    let theme = localStorage.getItem(this.themekey);
    return (theme === null ? 'dark' : theme);
  }

  toggleTheme() {
    let theme = localStorage.getItem(this.themekey);

    theme = (theme === 'light' ? 'dark' : 'light');   
    localStorage.setItem(this.themekey, theme);

    return theme;
  }

  handleError(err) {
    console.error('RedditService Exception', err);
  }
}

export default new PostDataService();