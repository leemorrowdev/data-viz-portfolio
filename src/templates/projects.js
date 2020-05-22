/**
 * Component to list all posts
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';

const AllProjects = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  return (
    <MainLayout>
      <h1>All Projects</h1>
      <SEO title="All Projects" />
      <ul>
        {edges.map(({ node: project }) => (
          <li key={project.id}>
            <h3>
              <Link to={project.fields.slug}>{project.frontmatter.title}</Link>
            </h3>
            <span>{project.frontmatter.date}</span>
            <p>{project.excerpt}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export const projectsQuery = graphql`
  query projectsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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

export default AllProjects;
