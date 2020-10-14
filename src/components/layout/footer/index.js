/**
 * Main footer component
 */

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./footer.module.scss"

const Footer = ({ siteAuthor }) => (
  <footer className={styles.container}>
    <div>
      © {new Date().getFullYear()}{" "}
      <span className={styles.author}>
        <Link to="/">{siteAuthor}</Link>
      </span>
    </div>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
