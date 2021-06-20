import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, {withTheme} from 'styled-components';
import { ThemeSwitch } from '../../';
import { toggleTheme } from '../../../actions/posts';

class HeaderApp extends Component {
  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(){
    this.props.toggleTheme();
  }

  render() {
    return (
    <HeaderContainer>
      <img src={'reddit-logo.png'} alt="Reddit logo"/>
      <div className="theme-switch">
        <ThemeSwitch onClick={this.changeTheme}/>
      </div>
    </HeaderContainer>)
  }
}

const HeaderContainer = styled.div`
background-color: ${props => props.theme.background};
padding:10px;
display: flex;
flex:0;
justify-content: space-between;
border-bottom: solid 1px ${props => props.theme.header.border};
z-index:9;

> img {
  max-width:80px;
}

.theme-switch{
  display:flex;
  align-items: center;
  width:50px;
}
`

export default connect(null, { toggleTheme })(withTheme(HeaderApp));
