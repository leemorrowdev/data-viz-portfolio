/**
 * Projects
 * 
 * Display a page of projects
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import PageLayout from "../../components/page-layout";
import Seo from "../../components/seo";
import {
  container,
  content,
  nav,
  pagination,
  arrow,
  number,
  current,
} from "./projects.module.scss";

const Projects = ({ data, pageContext }) => {
  const {
    allMdx: { edges },
  } = data;

  const { currentPage, numPages } = pageContext;

  return (
    <PageLayout>
      <div className={container}>
        <div className={content}>
          <div className={nav}>
            <Link to="/">&larr; Home</Link>
          </div>
          <h1>Projects</h1>
          <Seo
            title={`All Projects - ${currentPage}`}
            description={`All data visualization projects - ${currentPage}`}
          />
          <ul>
            {edges.map(({ node: project }) => {
              const featuredImage = getImage(project.fields.featuredImage);

              return (
                <li key={project.id}>
                  <Link
                    to={`/projects${project.fields.slug}`}
                    state={{ currentPage }}
                  >
                    <div>
                      <GatsbyImage image={featuredImage} alt="" />
                      <h4>{project.frontmatter.title}</h4>
                      <span>{project.frontmatter.date}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={pagination}>
          <span className={arrow}>
            {!(currentPage === 1) && (
              <Link
                to={`/projects/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
              >
                &larr;
              </Link>
            )}
          </span>
          <span>
            {Array.from({ length: numPages }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <span
                  key={pageNumber}
                  className={`${number} ${
                    pageNumber === currentPage && current
                  }`}
                >
                  {pageNumber === 1 ? (
                    <Link to={`/projects/`}>1</Link>
                  ) : (
                    <Link to={`/projects/${pageNumber}`}>{pageNumber}</Link>
                  )}
                </span>
              );
            })}
          </span>
          <span className={arrow}>
            {currentPage !== numPages && (
              <Link to={`/projects/${currentPage + 1}`} rel="next">
                &rarr;
              </Link>
            )}
          </span>
        </div>
      </div>
    </PageLayout>
  );
};

export const projectsQuery = graphql`
  query projectsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/projects/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

export default Projects;
