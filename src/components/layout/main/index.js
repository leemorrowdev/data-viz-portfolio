/**
 * Main layout component
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from '../header';
import Footer from '../footer';

import './main-layout.scss';
import styles from './main-layout.module.scss';

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
  `);

  return (
    <div className={styles.container}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={title} siteSocial={social} />
      <main>{children}</main>
      <Footer siteAuthor={author} />
    </div>
  );
};

export default MainLayout;
