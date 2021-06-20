import React from 'react';
import styled, { withTheme } from "styled-components";

export const Loading = withTheme((props) => {
  return (<>
    {props.show === true && (
      <>
        <LoadingOverlay></LoadingOverlay>
        <LoadingContainer>
          <div className="circle"></div>
          <img alt="Waiting" src="reddit-logo.png" />
          <LoadingText>Fetching data, waiting...</LoadingText>
        </LoadingContainer>
      </>
    )}
  </>);
})

const LoadingText = styled.div`
  z-index:10;
  position: absolute;
  color: white;
  margin-top:180px;
`

const LoadingOverlay = styled.div`
  z-index:10;
  background-color: #580f01;
  opacity: .9;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;  
`

const LoadingContainer = styled.div`
  z-index:11;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left:0;

  img {
    transform: scale(1.5);
    position: absolute;
    z-index:15;
  }

  .circle {
    height: 80px;
    width: 80px;
    background-color: #FFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 13;
    animation: growAndFade 1s linear infinite;
  }

  @keyframes growAndFade {
    0% {
      height: 100px;
      width: 100px;
      opacity: 1;
      top: 0;
      left: 0;
    }
    100% {
      height: 150px;
      width: 150px;
      opacity: 0;
      top: -25px;
      left: -25px;
    }
  }
`