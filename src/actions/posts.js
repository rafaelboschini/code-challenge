import {
  RETRIEVE_POSTS,
  DISMISS_ALL,
  DISMISS_ID,
  TOGGLE_THEME,
  SELECT_POST,
  SHOW_POST,
  RETRIEVE_THEME,
  SHOW_LOADING
} from "./types";
import PostDataService from "../services/post.service";

const retrievePosts = () => async (dispatch) => {
  try {
    const res = await PostDataService.getPostsAPI();

    dispatch({
      type: RETRIEVE_POSTS,
      payload: res,
    });
  } catch (err) {
    handleError(err);
  }
}

const dismissAllPosts = () => (dispatch) => {
  try {
    PostDataService.dismissAll();

    dispatch({
      type: DISMISS_ALL
    });
  } catch (err) {
    handleError(err);
  }
}

const dismissByID = (idPost) => (dispatch) => {
  try {
    const res = PostDataService.dismissById(idPost);

    dispatch({
      type: DISMISS_ID,
      payload: res,
    });
  } catch (err) {
    handleError(err);
  }
}

const toggleTheme = () => async (dispatch) => {
  try {
    const res = PostDataService.toggleTheme();
    
    dispatch({
      type: TOGGLE_THEME,
      payload: { theme: res },
    });
  } catch (err) {
    handleError(err);
  }
}

const getTheme = () => (dispatch) => {
  try {
    const res = PostDataService.getTheme();

    dispatch({
      type: RETRIEVE_THEME,
      payload: { theme: res },
    });
  } catch (err) {
    handleError(err);
  }  
}

const selectPost = (post) => async (dispatch) => {
  try {
    dispatch({
      type: SELECT_POST,
      payload: post,
    });
  } catch (err) {
    handleError(err);
  }
}

const showLoading = (show) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_LOADING,
      payload: show,
    });
  } catch (err) {
    handleError(err);
  }
}

const showPost = (show) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_POST,
      payload: show,
    });
  } catch (err) {
    handleError(err);
  }
}

const handleError = (err) => {
  console.error('Action Exception', err);
}

export {
  dismissAllPosts,
  retrievePosts,
  selectPost,
  showPost,
  dismissByID,
  toggleTheme,
  getTheme,
  showLoading
}