import { ActionTypes } from "../constants/action-types";

export const addFavourite = (favorite) => {
  return {
    type: ActionTypes.FAVOURITE_ADDED,
    payload: favorite,
  };
};

export const removeFavourite = (favorite) => {
  return {
    type: ActionTypes.FAVOURITE_REMOVED,
    payload: favorite,
  };
};
