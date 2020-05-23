import React from 'react'
import PageTitle from '../components/PageTitle'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

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
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <h3>
              <Link to={`/product/${node.handle}`}>{node.title}</Link>
              {" - "}${Number(node.priceRange.minVariantPrice.amount).toFixed(2)}
            </h3>
            {node.images.map(image => (
              <Img fluid={image.localFile.childImageSharp.fluid} />
            ))}
            <p>{node.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Shop