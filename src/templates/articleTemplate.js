import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"

export default ({ data }) => {
  const post = data.contentfulPost

  return (
    <Layout>
      <div className={"section"}>
        <div className={"container"}>
          <div id={"post"}>
            <div className={"header"}>
              <h2>{post.title}</h2>
              <small>{post.createdAt}</small>
            </div>

            <figure className={"image"}>
              <Img fluid={post.image.fluid} />
            </figure>

            <div className={"content"}>
              <article>{post.content}</article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      subtitle
      author
      content
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      createdAt
    }
  }
`
