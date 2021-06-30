import { ActionTypes } from "../constants/action-types";
const intialState = {
  posts: [],
};

export const postsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export const selectedPostsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_POST:
      return {};
    default:
      return state;
  }
};
