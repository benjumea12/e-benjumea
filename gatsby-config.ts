import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Porfafolio E-Benjumea`,
    siteUrl: `https://my-briefcase.vercel.app/`,
    description: "Mi portafolio de proyectos...",
    image: "https://i.imgur.com/ZRKT0qV.png",
    linkedinUsername: "https://www.linkedin.com/in/benjumea-c22/"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
  ]
};

export default config;
