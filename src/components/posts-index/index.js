/**
 * Component to list all posts
 */

import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

import styles from './posts-index.module.scss';

const PostsIndex = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(postsQuery);

  return (
    <div className={styles.container}>
      <h1>Posts</h1>

      <ul>
        {edges.map(({ node: post }) => (
          <li key={post.id}>
            <h2>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const postsQuery = graphql`
  query postsIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default PostsIndex;
