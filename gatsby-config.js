module.exports = {
  siteMetadata: {
    title: `Lee Morrow`,
    author: `Lee Morrow`,
    description: `Data Viz Portfolio`,
    siteUrl: `https://leemorrow.dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/theactualee`,
      },
      {
        name: `github`,
        url: `https://github.com/leemorrowdev`,
      },
      {
        name: `email`,
        url: `mailto:leemorrowdev@gmail.com`
      }
    ],
  },
  plugins: [
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lee Morrow`,
        short_name: `Lee`,
        start_url: `/`,
        background_color: `#F9F9F9`,
        theme_color: `#F9F9F9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout/mdx/index.js")
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
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-sass`
  ],
}
