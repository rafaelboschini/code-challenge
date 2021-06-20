import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePosts, dismissByID, selectPost, showPost, showLoading } from "../../actions/posts";
import { BoxItem, Pagination, EmptyPost, Arrow } from '../'

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [],
      currentIndex: 1,
    };
  }

  handlePagingChange(page) {
    if (page === -1)
      page = this.state.currentIndex - 1; // Prev

    if (page === 6)
      page = this.state.currentIndex + 1; // Next

    // Prevent broken array index
    if (page > 5) page = 1;
    if (page < 1) page = 5;

    this.setState({
      currentIndex: parseInt(page),
    });
  }

  pagingRender() {
    return [-1, 1, 2, 3, 4, 5, 6].map(item => (
      <li key={item} onClick={() => { this.handlePagingChange(item) }} className={this.state.currentIndex === item ? 'selected-item' : ''}>
        {item < 0 ? (<Arrow/>) : (item > 5) ? (<Arrow rtl/>) : item}
      </li>))
  }

  paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  dismissPost(idPost) {
    this.props.dismissByID(idPost);
  }

  selectPost(post) {
    this.props.selectPost(post);
    this.props.showPost(true);
  }

  componentDidMount() {
    this.props.showLoading(true);
    this.props.retrievePosts();
  }

  render() {
    const { postList } = this.props;
    return (<>
      {postList.length === 0 ?
        (<EmptyPost handleRefresh={() => { this.props.showLoading(true);this.props.retrievePosts(); }} />) :
        (<>
          <Pagination>
            {this.pagingRender()}
          </Pagination>
          <div>
            {this.paginate(postList, 10, this.state.currentIndex).map(item => (
              <BoxItem
                data={item}
                key={item.id}
                handleSelect={(item) => { this.selectPost(item) }}
                handleDismiss={(id) => { this.dismissPost(id) }} />
            ))}
          </div>
        </>)}
    </>
    )
  }
}

const mapStateToProps = (state) => {
  const { RedditReducer } = state;

  return {
    currentIndex: 1,
    postList: RedditReducer.postlist,
  };
};

export default connect(mapStateToProps, { retrievePosts, dismissByID, selectPost, showPost, showLoading })(PostList);