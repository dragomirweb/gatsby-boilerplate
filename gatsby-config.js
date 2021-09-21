module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "itssimplythatsimple",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ukomycjj",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "11111",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
