module.exports = {
  siteMetadata: {
    title: "Connor Bryan | Principal Architect"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    }
  ]
};
