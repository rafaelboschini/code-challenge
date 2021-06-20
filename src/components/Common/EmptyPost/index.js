import React, { Component } from 'react';
import styled from "styled-components";

class EmptyPost extends Component {
  render() {
    return (
      <EmptyContainer>
        <img src={"refresh_reload_icon.svg"} onClick={() => { this.props.handleRefresh() }} alt="Refresh data"/>
        <span>Refresh Data</span>
      </EmptyContainer>)
  }
}

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 50px;

  img{
    width: 50px;
    margin: auto;
    margin-bottom: 10px;
  }
`

export default EmptyPost;
