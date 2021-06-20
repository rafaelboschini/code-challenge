import styled, {withTheme} from "styled-components";

export const Content = withTheme(styled.div`
display: flex;
flex:2;
overflow: auto;

.post-content{
  flex:2;
  overflow: auto;
  background-color: ${props => props.theme.background};
  width:100%;
}

.sidebar {
  flex:1;
  overflow: auto;
}

> div {
  &::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #F06076 14%,#ff9900 64%);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(13deg, #ff9900 14%,#F06076 64%);
  }
   
   &::-webkit-scrollbar-track{
    background: ${props => props.theme.body};

   }
}

@media(max-width: 768px) {
  .post-content {

    &[aria-selected=false] {
      display: none;
    }
    &[aria-selected=true] {
      display: block;
      position: absolute;
      z-index: 15;
      HEIGHT: 100%;
    }
  }
}
`)