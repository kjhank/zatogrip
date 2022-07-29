require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
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
        alias: {
          '@components': 'src/components',
          '@containers': 'src/containers',
          '@icons': 'src/icons',
          '@pages': 'src/pages',
          '@src': 'src',
          '@templates': 'src/templates',
          '@theme': 'src/theme',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#007d30',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
        name: 'Zatogrip 2022',
        short_name: 'zatogrip',
        start_url: '/',
        theme_color: '#007d30',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: {
        id: process.env.GTM_ID,
      },
      resolve: 'gatsby-plugin-google-tagmanager',
    },
    {
      options: {
        trackingId: process.env.GA_ID,
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    author: '@kjhank',
    baseUrl: 'https://zatogrip.pl',
    description: '2022 Zatogrip page',
    title: 'Zatogrip',
    siteUrl: `https://zatogrip.pl`,
  },
};
