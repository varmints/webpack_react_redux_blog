import React from "react";
import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/srip" title="srip">
          srip
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
      <div>&copy; 2021 next well designed blog</div>
    </footer>
  );
};

export default Footer;
