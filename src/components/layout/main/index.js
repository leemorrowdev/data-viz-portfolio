/**
 * Main layout component
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"

import "../../../sass/global.scss"
import styles from "./main-layout.module.scss"

const MainLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, author, social },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          social {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={styles.container}>
        <Header siteTitle={title} siteSocial={social} />
        <main>{children}</main>
        <Footer siteAuthor={author} />
      </div>
    </>
  )
}

export default MainLayout
