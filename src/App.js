import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from './components/Layout/Themes';
import { Content, HeaderApp, PostList, FooterApp, PostView, LayoutApp, Loading } from './components';
import { getTheme } from './actions/posts';

class App extends Component {
  constructor(props){
    super(props);
    this.getInitialTheme();
  }

  getInitialTheme(){
    this.props.getTheme()
  }

  render() {
    const { theme, showViewer, showLoading } = this.props;
    
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <LayoutApp>
          <HeaderApp handleTheme={() => this.handleTheme} />
          <Content>
            <div className="sidebar">
              <PostList></PostList>
            </div>
            <div className="post-content" aria-selected={showViewer ? 'true' : 'false'}>
              <PostView></PostView>
            </div>
          </Content>
          <FooterApp/>
        </LayoutApp>
        <Loading show={showLoading}/>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { RedditReducer } = state;
  return {
    theme: RedditReducer.theme,
    showViewer: RedditReducer.showViewer,
    showLoading: RedditReducer.showLoading
  };
};

export default connect(mapStateToProps, { getTheme })(App);