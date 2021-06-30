import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedPost,
  removeSelectedPost,
} from "../redux/actions/postsActions";
import CommentListing from "./CommentListing";
import style from "../styles/article.module.css";
import styleText from "../styles/article-text.module.css";
import ShareComponent from "./ShareComponent";

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  let post = useSelector((state) => state.post);
  const { id, title, body } = post;
  const fetchPostDetail = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((response) => response.json());
    dispatch(selectedPost(response));
  };

  useEffect(() => {
    if (postId && postId !== "") {
      fetchPostDetail(postId);
    }
    return () => {
      dispatch(removeSelectedPost());
    };
  }, [postId]);

  return (
    <div>
      {Object.keys(post).length === 0 ? (
        <div className={style.article}>
          <div className="loading__text">...Loading</div>
        </div>
      ) : (
        <article className={style.article}>
          <h1 className={styleText.article__title}>{title}</h1>
          <h2 className={styleText.article__subtitle}>
            Or ever was, or ever will be
          </h2>

          <time className={styleText.article__time}>MAR. 9, 2014</time>

          <p className={styleText.article__paragraph}>{body}</p>
          <ShareComponent postId={id} />
          <CommentListing />
        </article>
      )}
    </div>
  );
};

export default PostDetails;
