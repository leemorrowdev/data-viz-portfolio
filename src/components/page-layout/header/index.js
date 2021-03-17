/**
 * Header component
 */

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

import styles from "./header.module.scss"

const icons = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
}

const Header = ({ siteTitle, siteSocial }) => (
  <header className={styles.container}>
    <div className={styles.text}>
      <Link to="/">{siteTitle}</Link>
    </div>
    <div>
      {siteSocial.map(platform => (
        <a className={styles.icon} key={platform.url} href={platform.url}>
          {icons[platform.name]}
        </a>
      ))}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSocial: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSocial: [],
}

export default Header
