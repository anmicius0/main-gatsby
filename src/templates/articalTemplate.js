import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

export default ({ data }) => {
  console.log(data.contentfulPost)
  const post = data.contentfulPost

  return (
    <Layout>
      <div className={"post"}>
        <div className={"header"}>
          <h1>{post.title}</h1>
          <small>{post.createdAt}</small>
        </div>

        <figure className={"image"}>
          <img src={post.image.file.url}></img>
        </figure>

        <div className={"content"}>
          <article>{post.content}</article>
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
        file {
          url
        }
      }
      createdAt
    }
  }
`
