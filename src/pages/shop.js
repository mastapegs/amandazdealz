import React from 'react'
import PageTitle from '../components/PageTitle'
import { graphql } from "gatsby"

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
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
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <h3>
              {node.title}
              {" - "}${Number(node.priceRange.minVariantPrice.amount).toFixed(2)}
            </h3>
            <p>{node.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Shop