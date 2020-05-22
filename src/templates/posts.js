/**
 * Component to list all posts
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';

const AllPosts = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  return (
    <MainLayout>
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
