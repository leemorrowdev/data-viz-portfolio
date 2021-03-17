/**
 * Component to list all posts
 * Based on https://www.gatsbyjs.org/docs/adding-pagination/
 */

import React from "react"
import { Link, graphql } from "gatsby"

import PageLayout from "../../components/page-layout"
import SEO from "../../components/seo"
import styles from "./posts.module.scss"

const Posts = ({ data, pageContext }) => {
  const {
    allMdx: { edges },
  } = data

  const { currentPage, numPages } = pageContext

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <Link to="/">&larr; Home</Link>
          </div>
          <h1>Posts</h1>
          <SEO
            title={`All Posts - ${currentPage}`}
            description={`All front end development blog posts - ${currentPage}`}
          />
          <ul>
            {edges.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={`/posts${post.fields.slug}`} state={{ currentPage }}>
                  <div>
                    <h3>{post.frontmatter.title}</h3>
                    <span>{post.frontmatter.date}</span>
                    <p>{post.excerpt}</p>
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
                to={`/posts/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
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
                    <Link to={`/posts/`}>1</Link>
                  ) : (
                    <Link to={`/posts/${pageNumber}`}>{pageNumber}</Link>
                  )}
                </span>
              )
            })}
          </span>
          <span className={styles.arrow}>
            {currentPage !== numPages && (
              <Link to={`/posts/${currentPage + 1}`} rel="next">
                &rarr;
              </Link>
            )}
          </span>
        </div>
      </div>
    </PageLayout>
  )
}

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/posts/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
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

export default Posts
