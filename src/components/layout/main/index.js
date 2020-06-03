/**
 * Main layout component
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={styles.container}>
        <Header siteTitle={title} siteSocial={social} />
        <main>{children}</main>
        <Footer siteAuthor={author} />
      </div>
    </>
  )
}

export default MainLayout
