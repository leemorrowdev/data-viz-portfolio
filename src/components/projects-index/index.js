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
      <h2>Recent Projects</h2>

      <ul>
        {edges.map(({ node: post }) => (
          <li key={post.id}>
            <h3>
              <Link to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </h3>
            <span>{post.frontmatter.date}</span>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const projectsQuery = graphql`
  query projectsIndex {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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

export default ProjectsIndex;
