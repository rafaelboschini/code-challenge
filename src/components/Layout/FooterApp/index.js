import React, { Component } from 'react';
import { connect } from "react-redux";
import styled, {withTheme} from 'styled-components';
import packageInfo from '../../../../package.json'
import { dismissAllPosts } from "../../../actions/posts";
import { TrashIcon } from '../../';

class FooterApp extends Component {
  constructor(props) {
    super(props);
    this.handleReload = this.handleReload.bind(this);
  }

  handleReload() {
    this.props.dismissAllPosts();
  }

  render() {
    return (
      <VersionInfo>
        <ReloadIcon onClick={this.handleReload}>
          <TrashIcon/>
          <span>dismiss all</span>
        </ReloadIcon>

        {packageInfo.displayName}
        <span className="badge">{packageInfo.version}</span>
      </VersionInfo>)
  }
}

const VersionInfo = styled.footer`
  font-size:12px;
  text-align: right;
  background-color: ${props => props.theme.background};
  padding: 5px;

  @media(max-width: 768px) {
    box-shadow: 0px -3px 21px -2px rgba(0,0,0,0.45);
    z-index: 9;
  }

  svg{
    width: 15px;
    height:15px;
  }

  .badge {
    background-color: #ffba08;
    padding: 2px 5px 2px 5px;
    margin-left:5px;
    border-radius: 8px;
    font-size:11px;
  }
`
const ReloadIcon = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;

  img {
    width: 15px;
  }

  span{
    margin-left:5px;
  }
`

export default connect(null, { dismissAllPosts })(withTheme(FooterApp));