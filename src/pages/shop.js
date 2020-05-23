import React from 'react'
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
  return (
    <>
      <PageTitle titleText='Shop' />
      <ul className={styles.productList}>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <h3>
              <Link className={styles.links} to={`/product/${node.handle}`}>{node.title}</Link>
              {" - "}${Number(node.priceRange.minVariantPrice.amount).toFixed(2)}
            </h3>
            {node.images.map(image => (
              <Link to={`/product/${node.handle}`}>
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