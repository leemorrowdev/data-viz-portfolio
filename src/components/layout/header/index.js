/**
 * Main header component
 */

import { Link /*withPrefix*/ } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import styles from './header.module.scss';

const icons = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
};

const Header = ({ siteTitle, siteSocial }) => (
  <header className={styles.container}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div>
      {siteSocial.map((platform) => (
        <a
          className={styles.icon}
          key={platform.url}
          href={platform.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {icons[platform.name]}
        </a>
      ))}
    </div>

    {/* <a
      href={withPrefix('/resume.pdf')}
      target="_blank"
      rel="noreferrer noopener"
    >
      Resume
    </a> */}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSocial: PropTypes.array,
};

Header.defaultProps = {
  siteTitle: ``,
  siteSocial: [],
};

export default Header;
