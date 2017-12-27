module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
        options: {
          logo: `./src/images/favicon.svg`,
          injectHTML: true,
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            twitter: false,
            yandex: false,
            windows: false
          }
        }
    },

  ],
}
