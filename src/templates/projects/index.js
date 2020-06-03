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
    allMdx: { edges: mdxEdges },
    allFile: { edges: fileEdges },
  } = data

  const { currentPage, numPages } = pageContext

  // Combine image and Mdx nodes
  const nodes = mdxEdges.map(mdxEdge => {
    const {
      node: mdxNode,
      node: {
        fields: { slug },
      },
    } = mdxEdge
    const fileEdge = fileEdges.find(fileEdge => {
      const {
        node: { relativeDirectory },
      } = fileEdge
      return slug.slice(1, -1) === relativeDirectory
    })
    const { node: fileNode } = fileEdge

    return { ...mdxNode, ...fileNode }
  })

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.projects}>
          <h1>All Projects</h1>
          <SEO title="All Projects" />
          <ul>
            {nodes.map(project => (
              <li key={project.id}>
                <Link to={project.fields.slug}>
                  <div className={styles.image}>
                    <Img fluid={project.childImageSharp.fluid} />
                  </div>
                  <h4>{project.frontmatter.title}</h4>
                  <span>{project.frontmatter.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pagination}>
          <span className={styles.text}>
            {!(currentPage === 1) && (
              <Link
                to={`/projects/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
              >
                Previous
              </Link>
            )}
          </span>
          <span className={styles.numbers}>
            {Array.from({ length: numPages }, (_, i) => {
              const pageNumber = i + 1
              return (
                <span
                  key={pageNumber}
                  className={pageNumber === currentPage ? styles.active : ""}
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
          <span className={styles.text}>
            {currentPage !== numPages && (
              <Link to={`/projects/${currentPage + 1}`} rel="next">
                Next
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        extension: { eq: "png" }
        name: { eq: "image" }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
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
`

export default AllProjects
