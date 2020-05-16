/**
 * Main footer component
 */

import PropTypes from 'prop-types';
import React from 'react';

import styles from './footer.module.scss';

const Footer = ({ siteAuthor }) => (
  <footer className={styles.container}>
    <span>© {new Date().getFullYear()} {siteAuthor}</span>
  </footer>
);

Footer.propTypes = {
  siteAuthor: PropTypes.string,
};

Footer.defaultProps = {
  siteAuthor: ``,
};

export default Footer;
