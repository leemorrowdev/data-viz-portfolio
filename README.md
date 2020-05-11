# [leemorrow.dev](https://leemorrow.dev)

---

I created this portfolio site to host data visualizations on statistics, economics, and other data-driven topics. I love working in React, so I used GatsbyJS, a React and GraphQL based Static Site Generator with MDX support to help me rapidly develop new content.

## Core Libraries

- [GatsbyJS](https://www.gatsbyjs.org/)
- [ReactJS](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [MDX](https://mdxjs.com/)
- [D3](https://d3js.org/)

## Project Structure

- **`/src/components`**: This directory contains all project components.

- **`/src/components/layouts/main`**: This directory contains the top level layout component for all pages, the layout component for MDX files, and all global styles.

- **`/src/content`**: This directory contains all posts and project pages.

- **`/src/pages`**: This directory contains all other pages.

- **`gatsby-config.js`**: This file contains all site metadata and plugin configuration.

- **`gatsby-node.js`**: This file uses the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) to programmatically generate from MDX files in the `/src/content` directory.
