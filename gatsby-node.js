/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Based on:
// https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
// https://www.gatsbyjs.org/docs/adding-pagination/

const path = require(`path`);
const fs = require("fs");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Create slug field
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    const {
      sourceInstanceName,
      absolutePath,
      internal: { type },
    } = getNode(node.parent);

    // Create featured image node field on project Mdx nodes
    if (sourceInstanceName === "projects" && type === "File") {
      // Use Mdx node path for featuredImage path
      const ext = path.extname(absolutePath);
      // Swap extensions
      const featuredImage = absolutePath.replace(ext, ".png");
      // Only create node field if a featured image exists
      if (fs.existsSync(featuredImage)) {
        createNodeField({
          name: `featuredImage`,
          node,
          value: featuredImage,
        });
      }
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const mdxLayout = path.resolve(`./src/components/mdx-layout/index.js`);

  // Create posts pages
  const postsTemplate = path.resolve(`./src/templates/posts/index.js`);
  const postsQuery = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/content/posts/" } }
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
  `);

  if (postsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = postsQuery.data.allMdx.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: mdxLayout,
      context: { id: node.id },
    });
  });

  const postsPerPage = 4;
  const numPostPages = Math.ceil(posts.length / postsPerPage);

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
    });
  });

  // Create projects pages
  const projectsTemplate = path.resolve(`./src/templates/projects/index.js`);
  const projectsQuery = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/content/projects/" } }
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
  `);

  if (projectsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const projects = projectsQuery.data.allMdx.edges;
  projects.forEach(({ node }) => {
    createPage({
      path: `/projects${node.fields.slug}`,
      component: mdxLayout,
      context: { id: node.id },
    });
  });

  const projectsPerPage = 6;
  const numProjectPages = Math.ceil(projects.length / projectsPerPage);

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
    });
  });
};
