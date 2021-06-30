import { combineReducers } from "redux";
import { postsReducer, selectedPostsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";
import { favoriteReducer } from "./favoritesReducer";

const reducers = combineReducers({
  allPosts: postsReducer,
  post: selectedPostsReducer,
  comments: commentsReducer,
  allFavorites: favoriteReducer,
});
export default reducers;
