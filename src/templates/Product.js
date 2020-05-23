import React from 'react'
import { graphql } from 'gatsby'
import PageTitle from '../components/PageTitle'
import Img from 'gatsby-image'

export const query = graphql`
  query($shopifyId: String!) {
    shopifyProduct(shopifyId: {eq: $shopifyId}) {
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Product = ({ pageContext, data }) => {
  const { product } = pageContext
  return (
    <>
      <PageTitle titleText={product.title} />
      <p>{product.description}</p>
      {data.shopifyProduct.images.map(image => (
        <Img fluid={image.localFile.childImageSharp.fluid} />
      ))}
    </>
  )
}

export default Product