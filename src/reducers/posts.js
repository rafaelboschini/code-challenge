import {
  RETRIEVE_POSTS,
  DISMISS_ALL,
  DISMISS_ID,
  TOGGLE_THEME,
  SELECT_POST,
  SHOW_POST,
  RETRIEVE_THEME,
  SHOW_LOADING
} from "../actions/types";

const initialState = {
  theme: 'light',
  postlist: [],
  selected: {},
  showViewer: false,
  showLoading: false,
};

function RedditReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: payload
      }
    case SHOW_POST:
      return {
        ...state,
        showViewer: payload
      }
    case SELECT_POST:
      return {
        ...state,
        selected: payload
      }
    case RETRIEVE_THEME:
    case TOGGLE_THEME:
      return {
        ...state,
        theme: payload.theme
      }
    case DISMISS_ID:
    case RETRIEVE_POSTS:
      return {
        ...state,
        postlist: payload,
        selected: payload[0],
        showLoading: false
      };
    case DISMISS_ALL:
      return {
        ...state,
        postlist: []
      };
    default:
      return state;
  }
};

export default RedditReducer;