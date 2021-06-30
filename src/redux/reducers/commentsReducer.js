import { ActionTypes } from "../constants/action-types";
const intialState = {
  comments: [],
};

export const commentsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};
