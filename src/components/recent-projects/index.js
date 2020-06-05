/**
 * Component to list recent projects
 */

import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./recent-projects.module.scss"

const RecentProjects = () => {
  const {
    allMdx: { edges: mdxEdges },
    allFile: { edges: fileEdges },
  } = useStaticQuery(recentProjectsQuery)

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
    <div className={styles.container}>
      <h2>Recent Projects</h2>

      <ul>
        {nodes.map(project => (
          <li key={project.id}>
            <Link to={`/projects${project.fields.slug}`}>
              <div>
                <div className={styles.image}>
                  <Img fluid={project.childImageSharp.fluid} />
                </div>
                <h4>{project.frontmatter.title}</h4>
                <span>{project.frontmatter.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/projects">All Projects &rarr;</Link>
    </div>
  )
}

const recentProjectsQuery = graphql`
  query recentProjects {
    allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        extension: { eq: "png" }
        name: { eq: "image" }
      }
      limit: 1000
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
      limit: 3
    ) {
      edges {
        node {
          id
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

export default RecentProjects
