/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
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
    <>
      <Header siteTitle={title} siteSocial={social} />
      <main>{children}</main>
      <Footer siteAuthor={author} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
