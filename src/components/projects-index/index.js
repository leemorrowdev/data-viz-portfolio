/**
 * Component to list all projects
 */

import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

import styles from './projects-index.module.scss';

const ProjectsIndex = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(projectsQuery);

  return (
    <div className={styles.container}>
      <h1>Projects</h1>

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

const projectsQuery = graphql`
  query projectsIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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

export default ProjectsIndex;
