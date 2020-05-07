import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

const PostsIndex = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(postsQuery);

  return (
    <div>
      <h1>Awesome MDX Blog</h1>

      <ul>
        {edges.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
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
