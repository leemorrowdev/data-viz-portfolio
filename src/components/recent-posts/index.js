/**
 * Component to list recent posts
 */

import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

import styles from './recent-posts.module.scss';

const RecentPosts = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(recentPostsQuery);

  return (
    <div className={styles.container}>
      <h2>Recent Posts</h2>

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

      <Link to="/posts">All Posts</Link>
    </div>
  );
};

const recentPostsQuery = graphql`
  query recentPosts {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: 2
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

export default RecentPosts;
