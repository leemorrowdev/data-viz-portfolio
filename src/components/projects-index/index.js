import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

const ProjectsIndex = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(projectsQuery);

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