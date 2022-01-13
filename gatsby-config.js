module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        rule: {
          omitKeys: [
            'width',
            'height',
          ],
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@src': 'src',
          '@theme': 'src/theme',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        name: 'Untitled Gatsby project',
        short_name: 'foo',
        start_url: '/',
        theme_color: '#663399', // TODO: set these up
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Gatsby starter using Styled Components',
    title: 'Gatsby Starter with Styled Components',
  },
};
