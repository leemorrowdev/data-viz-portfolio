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
      <h2>Recent Posts</h2>

      <ul>
        {edges.map(({ node: post }) => (
          <li key={post.id}>
            <h3>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h3>
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
