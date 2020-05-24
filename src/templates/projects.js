/**
 * Component to list all projects
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';
import styles from './projects.module.scss';

const AllProjects = ({ data, pageContext }) => {
  const {
    allMdx: { edges },
  } = data;

  const { currentPage, numPages } = pageContext;

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.projects}>
          <h1>All Projects</h1>
          <SEO title="All Projects" />
          <ul>
            {edges.map(({ node: project }) => (
              <li key={project.id}>
                <h3>
                  <Link to={project.fields.slug}>
                    {project.frontmatter.title}
                  </Link>
                </h3>
                <span>{project.frontmatter.date}</span>
                <p>{project.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pagination}>
          {/* Display for all pages but the first */}
          <span>
            {currentPage !== 1 && (
              <Link
                to={`/projects/${
                  currentPage - 1 === 1 ? '/' : currentPage - 1
                }`}
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
              <Link to={`/projects/${currentPage + 1}`} rel="next">
                Next Page
              </Link>
            )}
          </span>
        </div>
      </div>
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
