import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "../styles/article.module.css";
import styleText from "../styles/article-text.module.css";
import ShareComponent from "./ShareComponent";

const PostComponent = () => {
  const posts = useSelector((state) => state.allPosts.posts);

  return (
    <>
      {posts.length === 0 ? (
        <div className={style.article}>
          <div className="loading__text">...Loading</div>
        </div>
      ) : (
        posts.map((post) => {
          const { id, title, body } = post;
          return (
            <article className={style.article} key={id}>
              <h1 className={styleText.article__title}>
                <Link className={styleText.article__link} to={`/post/${id}`}>
                  {title}
                </Link>
              </h1>

              <h2 className={styleText.article__subtitle}>
                Or ever was, or ever will be
              </h2>

              <time className={styleText.article__time}>MAR. 9, 2014</time>

              <p className={styleText.article__paragraph}>{body}</p>
              <ShareComponent postId={id} />
            </article>
          );
        })
      )}
    </>
  );
};

export default PostComponent;
