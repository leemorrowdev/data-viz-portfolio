/**
 * Header
 */

import { Link } from "gatsby";
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { container, text, icon } from "./header.module.scss";

const icons = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
};

const Header = ({ siteTitle = "", siteSocial = [] }) => (
  <header className={container}>
    <div className={text}>
      <Link to="/">{siteTitle}</Link>
    </div>
    <div>
      {siteSocial.map((platform) => (
        <a className={icon} key={platform.url} href={platform.url}>
          {icons[platform.name]}
        </a>
      ))}
    </div>
  </header>
);

export default Header;
