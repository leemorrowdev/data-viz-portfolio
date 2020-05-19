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
            <span>{post.frontmatter.date}</span>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const postsQuery = graphql`
  query postsIndex {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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

export default PostsIndex;
