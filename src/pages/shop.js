import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import styles from './shop.module.css'

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          images {
            localFile {
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`

const Shop = ({ data }) => {
  useEffect(() => {
    const client = window.ShopifyBuy.buildClient({
      domain: 'amandaz-dealz.myshopify.com',
      storefrontAccessToken: '7bb072426eb538dc4f6a913355f95c24'
    })
    const ui = window.ShopifyBuy.UI.init(client);
    window.ui = ui
    ui.createComponent('collection', {
      id: 97485652097,
      node: document.getElementById('my-product')
    })
  }, [])
  return (
    <>
      <PageTitle titleText='Shop' />
      <div id='my-product'></div>
    </>
  )
}

export default Shop