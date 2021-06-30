import React from "react";

import Share from "../assets/images/plug.svg";
import Favorite from "../assets/images/towel.svg";

import styleShare from "../styles/article-share.module.css";

const ShareComponent = ({ postId }) => {
  return (
    <div className={styleShare.share}>
      <span
        className={`${styleShare.share__link} ${styleShare.share__linkgrayscale}`}
      >
        <img className={styleShare.share__img} src={Share} />
      </span>
      <span
        postId={postId}
        className={`${styleShare.share__link} ${styleShare.share__linkgrayscale}`}
      >
        <img className={styleShare.share__img} src={Favorite} />
      </span>
    </div>
  );
};

export default ShareComponent;
