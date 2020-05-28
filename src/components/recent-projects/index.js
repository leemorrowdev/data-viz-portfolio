/**
 * Component to list recent projects
 */

import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

import styles from './recent-projects.module.scss';

const RecentProjects = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(recentProjectsQuery);

  return (
    <div className={styles.container}>
      <h2>Recent Projects</h2>

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

      <Link to="/projects">All Projects</Link>
    </div>
  );
};

const recentProjectsQuery = graphql`
  query recentProjects {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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

export default RecentProjects;
