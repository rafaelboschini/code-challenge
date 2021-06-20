import styled from 'styled-components';

export const Pagination = styled.ul`
display: flex;
list-style: none;
margin:10px;
padding:0px;

li {
  min-width: 20px;
  text-align: center;
  padding:2px 5px 2px 5px;
  background-color: #FF4501;
  color: #fff;
  margin-right:1px;
  cursor:pointer;
  opacity: .8;
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all .5s;

  &:hover {
    opacity: 1;
  }

  &.selected-item{
    background-color: #ffba08;
    opacity: 1 !important;
  }
}
`