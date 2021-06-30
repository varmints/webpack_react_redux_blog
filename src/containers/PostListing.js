import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postsActions";
import PostComponent from "./PostComponent";

const PostListing = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    ).then((response) => response.json());
    dispatch(setPosts(response));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("Posts :", posts);
  return (
    <>
      <PostComponent />
    </>
  );
};

export default PostListing;
