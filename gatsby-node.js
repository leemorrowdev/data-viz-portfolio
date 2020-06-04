/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Based on:
// https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
// https://www.gatsbyjs.org/docs/adding-pagination/

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const mdxTemplate = path.resolve(`./src/templates/mdx/index.js`)

  // Create posts pages
  const postsTemplate = path.resolve(`./src/templates/posts/index.js`)
  const postsQuery = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (postsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = postsQuery.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: mdxTemplate,
      context: { id: node.id },
    })
  })

  const postsPerPage = 2
  const numPostPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPostPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: postsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPostPages,
        currentPage: i + 1,
      },
    })
  })

  // Create projects pages
  const projectsTemplate = path.resolve(`./src/templates/projects/index.js`)
  const projectsQuery = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (projectsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projects = projectsQuery.data.allMdx.edges
  projects.forEach(({ node }, index) => {
    createPage({
      path: `/projects${node.fields.slug}`,
      component: mdxTemplate,
      context: { id: node.id },
    })
  })

  const projectsPerPage = 6
  const numProjectPages = Math.ceil(projects.length / projectsPerPage)

  Array.from({ length: numProjectPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: projectsTemplate,
      context: {
        limit: projectsPerPage,
        skip: i * projectsPerPage,
        numPages: numProjectPages,
        currentPage: i + 1,
      },
    })
  })
}
