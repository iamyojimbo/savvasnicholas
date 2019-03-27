module.exports = {
  siteMetadata: {
    title: `Savvas Nicholas - Software Engineer`,
    description: `I design and develop high-quality, customised software for the web and beyond. Drop me a message to see how we can work together.`,
    author: `Savvas Nicholas`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sn-logo.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          'http://nervous-beaver-c4cc78.netlify.com/*': [
            'Basic-Auth: someuser:somepassword anotheruser:anotherpassword',
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
      },
    },
  ],
}
