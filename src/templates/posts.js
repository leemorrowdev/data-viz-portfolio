/**
 * Component to list all posts
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';
import styles from './posts.module.scss';

const AllPosts = ({ data, pageContext }) => {
  const {
    allMdx: { edges },
  } = data;

  const { currentPage, numPages } = pageContext;

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.posts}>
          <h1>All Posts</h1>
          <SEO title="All Posts" />
          <ul>
            {edges.map(({ node: post }) => (
              <li key={post.id}>
                <h3>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h3>
                <span>{post.frontmatter.date}</span>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pagination}>
          {/* Display for all pages but the first */}
          <span>
            {currentPage !== 1 && (
              <Link
                to={`/posts/${currentPage - 1 === 1 ? '/' : currentPage - 1}`}
                rel="prev"
              >
                Previous Page
              </Link>
            )}
          </span>
          <span className={styles.current}>{currentPage}</span>
          {/* Display for all pages but the last */}
          <span>
            {currentPage !== numPages && (
              <Link to={`/posts/${currentPage + 1}`} rel="next">
                Next Page
              </Link>
            )}
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default AllPosts;