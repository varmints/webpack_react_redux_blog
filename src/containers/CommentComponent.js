import React from "react";
import { useSelector } from "react-redux";

const CommentComponent = () => {
  const comments = useSelector((state) => state.comments.comments);
  const renderList = comments.map((comments) => {
    const { id, name, email, body } = comments;
    return (
      <div key={id}>
        {id} / {name} / {email} / {body}
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CommentComponent;
