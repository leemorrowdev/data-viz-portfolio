module.exports = {
  siteMetadata: {
    title: `Lee Morrow`,
    author: `Lee Morrow`,
    description: `Hi, my name is Lee. I make interesting data visualizations and write about front-end development.`,
    siteUrl: `https://leemorrow.dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/leemorrowdev`,
      },
      {
        name: `github`,
        url: `https://github.com/leemorrowdev`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/leemorrowdev/`,
      },
      {
        name: `email`,
        url: `mailto:leemorrowdev@gmail.com`,
      },
    ],
  },
  // Associate project image path string with absolutePath node
  mapping: { "Mdx.fields.featuredImage": `File.absolutePath` },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.leemorrow.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164858596-1`,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lee Morrow`,
        short_name: `Lee`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/templates/mdx/index.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
