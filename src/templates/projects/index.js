/**
 * Component to list all projects
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import MainLayout from "../../components/layout/main"
import SEO from "../../components/seo"
import styles from "./projects.module.scss"

const AllProjects = ({ data, pageContext }) => {
  const {
    allMdx: { edges },
  } = data

  const { currentPage, numPages } = pageContext

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <Link to="/">&larr; Home</Link>
          </div>
          <h1>All Projects</h1>
          <SEO
            title={`All Projects - ${currentPage}`}
            description={`All data visualization projects - ${currentPage}`}
          />
          <ul>
            {edges.map(({ node: project }) => (
              <li key={project.id}>
                <Link
                  to={`/projects${project.fields.slug}`}
                  state={{ currentPage }}
                >
                  <div>
                    <div className={styles.image}>
                      <Img
                        fluid={
                          project.fields.featuredImage.childImageSharp.fluid
                        }
                        alt=""
                      />
                    </div>
                    <h4>{project.frontmatter.title}</h4>
                    <span>{project.frontmatter.date}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pagination}>
          <span className={styles.arrow}>
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
              const pageNumber = i + 1
              return (
                <span
                  key={pageNumber}
                  className={`${styles.number} ${
                    pageNumber === currentPage && styles.current
                  }`}
                >
                  {pageNumber === 1 ? (
                    <Link to={`/projects/`}>1</Link>
                  ) : (
                    <Link to={`/projects/${pageNumber}`}>{pageNumber}</Link>
                  )}
                </span>
              )
            })}
          </span>
          <span className={styles.arrow}>
            {currentPage !== numPages && (
              <Link to={`/projects/${currentPage + 1}`} rel="next">
                &rarr;
              </Link>
            )}
          </span>
        </div>
      </div>
    </MainLayout>
  )
}

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
                fluid {
                  ...GatsbyImageSharpFluid
                }
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
`

export default AllProjects
