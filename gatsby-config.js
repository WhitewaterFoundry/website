module.exports = {
  siteMetadata: {
    title: `Pengwin for WSL`,
    description: `Pengwin is the easiest to use Linux distribution on Windows Subsystem for Linux`,
    author: `@pengwinlinux`,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/mdx`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog-posts",
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "json-data",
        path: `${__dirname}/src/json-data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pengwin`,
        short_name: `Pengwin`,
        start_url: `/`,
        background_color: `#9A54BB`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/pengwin-logo.png`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}
