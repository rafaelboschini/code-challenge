import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import { showPost } from "../../actions/posts";
import { FormatTime } from '../../helpers/datetime';
import { CommentIcon, LikeIcon } from '../';

class PostView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {}
    };
  }

  handleClose() {
    this.props.showPost(false);
  }

  isImage(url = "") {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  render() {
    const { selected } = this.props;
    return (
      <PostViewContainer>
        <div className="close-container only-mobile">
          <div className="post-timestamp">{FormatTime(selected.timestamp)}</div>
          <button alt="Close this post" onClick={(e) => { e.preventDefault(); this.handleClose() }}>close</button>
        </div>
        <div className="post-timestamp hide-mobile">{FormatTime(selected.timestamp)}</div>
        <h2>{selected.title}</h2>

        <div className="media-container">
          {this.isImage(selected.url) ?
            (<img alt={selected.title} src={selected.url} style={{ width: '100%' }} />) :
            (<a className="open-browser" href={selected.url} target="_blank" rel="noreferrer">open in brownser</a>)}

          {selected.secure_media?.reddit_video && (
            <video width="320" height="240" controls>
              <source src={selected.secure_media.reddit_video.scrubber_media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <Infobar>
          <div>
            <i>{selected.author}</i>
          </div>
          <div className="upvotes">
            {selected.ups}
            <LikeIcon/>
          </div>
          <div className="comments">
            {selected.num_comments}
            <div className="hide-mobile comments-label">Comments</div>
            <CommentIcon/>                     
          </div>
        </Infobar>
        {selected.content?.length > 0 && (<div className="post-text">{selected.content.length}</div>)}

      </PostViewContainer>
    );
  }
}

const Infobar = styled.div`
display: flex;
justify-content: space-between;
margin-top:25px;
font-size: 1.2em;
font-weight: bold;
line-height: 25px;

div {
  display: flex;

  img {
    margin - left:10px;
    width: 25px;
  }
}

.upvotes {
  color: #24A249;
}

.comments{
  &-label{
    margin-left:5px;
    margin-right:5px;
  }
}

@media(max-width: 425px) {
  flex-direction: column;
  div {
    justify-content:center;
    line-height:50px;
  }
}
`

const PostViewContainer = styled.div`
padding:10px;
display: flex;
flex-direction: column;
background-color: ${props => props.theme.body};

.close-container {
  text - align:right;
  justify-content: space-between;

  button {
    padding:3px;
    border:solid 1px ${props => props.theme.toggleBorder};
    cursor:pointer;
    background-color:inherit;
    color: inherit;
  }
}
.media-container{
  display: flex;
  justify-content:center;
  flex-direction: column;
  margin: 20px;
  video{
    margin:auto;
  }
  .open-browser {
    display:flex;
    justify-content:center;
    line-height:40px;
  
    &:visited{
      color: inherit;
    }
  }
}

.post {
  & -timestamp {
    text - align: right;
    font-size: .8em;      
  }
  &-text {
    margin - top:10px;
    text-align: justify;
    font-size: 1.1em;
  }
}
`
const mapStateToProps = (state) => {
  const { RedditReducer } = state;

  return {
    selected: RedditReducer.selected,
  };
};

export default connect(mapStateToProps, { showPost })(withTheme(PostView));
