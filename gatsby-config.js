module.exports = {
  siteMetadata: {
    title: "Lee Morrow",
    author: `Lee Morrow`,
    description: `Hi, my name is Lee. I make interesting data visualizations and write about front-end development.`,
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-164858596-1",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Lee Morrow`,
        short_name: `Lee`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.leemorrow.dev`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/components/mdx-layout/index.js"),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
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
  ],
};
