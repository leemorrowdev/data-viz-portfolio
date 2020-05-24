/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Based on https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value,
    });
  }
};

const path = require('path');
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const allMdxQuery = await graphql(`
    query {
      allMdx {
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
  `);

  if (allMdxQuery.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const content = allMdxQuery.data.allMdx.edges;
  // you'll call `createPage` for each result
  content.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/layout/mdx/index.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });

  // Based on https://www.gatsbyjs.org/docs/adding-pagination/

  const postsQuery = await graphql(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (postsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create posts pages
  const posts = postsQuery.data.allMdx.edges;
  const postsPerPage = 1;
  const numPostPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPostPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve('./src/templates/posts.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPostPages,
        currentPage: i + 1,
      },
    });
  });

  const projectsQuery = await graphql(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (projectsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create projects pages
  const projects = projectsQuery.data.allMdx.edges;
  const projectsPerPage = 1;
  const numProjectPages = Math.ceil(projects.length / projectsPerPage);
  Array.from({ length: numProjectPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: path.resolve('./src/templates/projects.js'),
      context: {
        limit: projectsPerPage,
        skip: i * projectsPerPage,
        numPages: numProjectPages,
        currentPage: i + 1,
      },
    });
  });
};
