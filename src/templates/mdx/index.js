/**
 * Main layout component with custom SEO
 */

import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import MainLayout from "../../components/layout/main"
import MDXComponents from "./components"
import SEO from "../../components/seo"
import styles from "./mdx-layout.module.scss"

const MdxLayout = ({
  location,
  data: {
    mdx: {
      body,
      fileAbsolutePath,
      frontmatter: { title, date },
    },
  },
}) => {
  const postsMatch = /\/posts\//.test(fileAbsolutePath)
  const projectsMatch = /\/projects\//.test(fileAbsolutePath)

  const { state = {} } = location
  const { currentPage } = state

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.nav}>
          {postsMatch && (
            <Link
              to={`/posts/${
                currentPage ? (currentPage === 1 ? "" : currentPage) : ""
              }`}
            >
              &larr; All Posts
            </Link>
          )}
          {projectsMatch && (
            <Link
              to={`/projects/${
                currentPage ? (currentPage === 1 ? "" : currentPage) : ""
              }`}
            >
              &larr; All Projects
            </Link>
          )}
        </div>
        <h1>{title}</h1>
        <div className={styles.date}>{date}</div>
        <SEO title={title} />
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </MainLayout>
  )
}

export const ContentQuery = graphql`
  query ContentQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default MdxLayout