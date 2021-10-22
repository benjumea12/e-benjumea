module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Briefcase",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Briefcase`,
        start_url: `/`,
        icon: `./src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
