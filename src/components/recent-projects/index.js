/**
 * Component to list recent projects
 */

import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./recent-projects.module.scss"

const RecentProjects = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(recentProjectsQuery)

  return (
    <div className={styles.container}>
      <h2>Recent Projects</h2>

      <ul>
        {edges.map(({ node: project }) => (
          <li key={project.id}>
            <Link to={`/projects${project.fields.slug}`}>
              <div>
                <div className={styles.image}>
                  <Img
                    fluid={project.fields.featuredImage.childImageSharp.fluid}
                  />
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
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/projects/" } }
      limit: 3
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

export default RecentProjects
