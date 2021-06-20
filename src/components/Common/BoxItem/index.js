import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";
import { FormatTime } from '../../../helpers/datetime';
import { RWebShare } from "react-web-share";
import { TrashIcon, ShareIcon } from '../../'

class BoxItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      deleted: false
    }
  }

  dismiss(id) {
    this.setState({
      deleted: true
    })

    setTimeout(()=>{
      this.props.handleDismiss(id)
    },1000);
  }

  render() {
    const { data } = this.props;

    return (
      <BoxItemContainer post-id={data.id} className={this.state.deleted ? 'delete' : ''}>
        <div className="post-title">
          <button title="See this post" onClick={() => { this.props.handleSelect(data) }}>{data.title}</button>
        </div>
        <div className="post-date">
          {FormatTime(data.timestamp)}
        </div>
        <div className="post-image" onClick={() => { this.props.handleSelect(data) }}>
          {!['self', 'image', 'default', 'text'].includes(data.thumbnail) ?
            (<img alt="Post thumb" src={data.thumbnail} />) :
            (<img src="reddit_icon.svg" alt="Sorry" style={{ width: 50, opacity: .7 }} />)}
        </div>
        <Toolbar>
          <RWebShare
            data={{
              text: `Boskini Reddit Client v1.0`,
              url: `${data.url}`,
              title: `${data.title}`,
            }}>
            <button><ShareIcon /></button>            
          </RWebShare>

          <div className="post-comments">{data.num_comments} comments</div>
          <button onClick={() => { this.dismiss(data.id) }}>
            <TrashIcon />
          </button>
        </Toolbar>
      </BoxItemContainer>
    )
  }
}

const Toolbar = styled.div`
margin-top: 15px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;

img {
  cursor: pointer;
  width: 24px;
}

button {
  border: 0px;
  background-color: inherit;

  svg {
    width:20px;
  }
}
`

const BoxItemContainer = styled.div`
display: flex;
flex-direction: column;
margin: 5px 5px 15px 5px;
padding:5px;
background-color: ${props => props.theme.background};
box-shadow: -7px 7px 19px -12px rgba(0,0,0,0.75);

&.delete {
  animation: smallAndHide 1s linear;
}

.post {
  &-title {
    font-size: 1em;
    margin-bottom: 10px;
    color: #FF4501;

    button{
      cursor:pointer;
      border:0px;
      background-color: inherit;
      color: inherit;
      text-align: left;
      font-size: inherit;
    }
  }

  &-date {
    font-size: .7rem;
    margin-bottom: 15px;
    color: #666;
  }

  &-image {
    text-align: center;
    cursor:pointer;
    
    div{
      overflow: hidden;
      max-height: 270px;
      
      img {
        max-width: 100%;
        height: auto;  
      }
    }
  }

  &-comments {
    text-align:center;
    font-size: 1.2rem;
  }
}

@keyframes smallAndHide {
  0% {
    transform: scale(1);

  }
  100% {
    transform: scale(0) rotate(85deg);
  }
}
`

export default withTheme(BoxItem);
