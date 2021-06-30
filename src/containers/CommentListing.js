import React, { useEffect } from "react";
import { setComments } from "../redux/actions/commentsActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/comment.module.css";

const CommentListing = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const fetchCommentsByPostId = async function (id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ).then((response) => response.json());
    dispatch(setComments(response));
  };

  useEffect(() => {
    if (postId && postId !== "") {
      fetchCommentsByPostId(postId);
    }
  }, [postId]);

  console.log("Comments: ", comments);

  return (
    <div>
      <div className={style.comments__header}>Comments:</div>
      {comments.length === 0 ? (
        <div>...Loading</div>
      ) : (
        comments.map((comment) => {
          const { id, name, email, body } = comment;
          return (
            <div className={style.comments__item} key={id}>
              <div className={style.comments__author}>{name}</div>
              <p className={style.comments__text}>{body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CommentListing;
