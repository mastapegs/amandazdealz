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
    ui.createComponent('product', {
      id: 2210322940033,
      node: document.getElementById('my-product')
    });
  }, [])
  return (
    <>
      <PageTitle titleText='Shop' />
      <ul id='my-product' className={styles.productList}>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li className={styles.products} key={node.shopifyId}>
            <h3>
              <Link className={styles.links} to={`/product/${node.handle}`}>{node.title}</Link>
              {" - "}${Number(node.priceRange.minVariantPrice.amount).toFixed(2)}
            </h3>
            {node.images.map(image => (
              <Link key={node.handle} to={`/product/${node.handle}`}>
                <Img fluid={image.localFile.childImageSharp.fluid} />
              </Link>
            ))}
            <p>{node.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Shop