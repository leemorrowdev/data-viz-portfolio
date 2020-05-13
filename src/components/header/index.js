/**
 * Main header component
 */

import { Link, withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './header.module.scss';

const Header = ({ siteTitle, siteSocial }) => (
  <header className={styles.header}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    {siteSocial.map((platform) => (
      <a
        key={platform.url}
        href={platform.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {platform.name}
      </a>
    ))}
    <a
      href={withPrefix('/resume.pdf')}
      target="_blank"
      rel="noreferrer noopener"
    >
      Resume
    </a>
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
