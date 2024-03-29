import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SecondLanding from "../components/Landing"
import FirstPost from "../components/blog/firstPost"
import OtherPost from "../components/blog/otherPost"

export default ({ data }) => {
  const firstPost = data.allContentfulPost.edges[0]
  const otherPost = data.allContentfulPost.edges.slice(1)

  return (
    <Layout>
      <SEO title="Home" />
      <SecondLanding title="Blog" />
      <FirstPost post={firstPost} />
      <OtherPost posts={otherPost} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
