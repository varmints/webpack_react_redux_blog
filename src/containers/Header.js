import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>
        <Link className={style.header__link} to="/">
          next well designed blog
        </Link>
      </h1>
    </header>
  );
};

export default Header;
