import { ActionTypes } from "../constants/action-types";
const intialState = {
  favorites: [],
};

export const favoriteReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, favorites: payload };
    default:
      return state;
  }
};

export const selectedFavoriteReducer = (
  state = intialState,
  { type, payload }
) => {
  console.log(type);
  switch (type) {
    case ActionTypes.FAVOURITE_ADDED:
      return { ...state, ...payload };
    case ActionTypes.FAVOURITE_REMOVED:
      return {};
    default:
      return state;
  }
};
