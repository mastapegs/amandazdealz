/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `amandaz-dealz.myshopify.com`,
        // The storefront access token
        accessToken: `7bb072426eb538dc4f6a913355f95c24`,
      },
    },
  ],
}
