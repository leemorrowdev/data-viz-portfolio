/**
 * Footer
 */

import { Link } from "gatsby";
import React from "react";

import { container, author } from "./footer.module.scss";

const Footer = ({ siteAuthor = "" }) => (
  <footer className={container}>
    <div>
      © {new Date().getFullYear()}{" "}
      <span className={author}>
        <Link to="/">{siteAuthor}</Link>
      </span>
    </div>
  </footer>
);

export default Footer;
