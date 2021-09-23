const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'itssimplythatsimple',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ukomycjj',
        dataset: 'production',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '11111',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
      __key: 'images',
    },

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@atoms': path.resolve(__dirname, 'src/components/atoms'),
          '@molecules': path.resolve(__dirname, 'src/components/molecules'),
          '@organisms': path.resolve(__dirname, 'src/components/organisms'),
          '@features': path.resolve(__dirname, 'src/components/features'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@contexts': path.resolve(__dirname, 'src/context'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        },
        extensions: ['js'],
      },
    },
  ],
}
