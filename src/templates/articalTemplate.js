import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

export default ({ data }) => {
  const post = data.ContentfulPost.edges[0].node

  return (
    <Layout>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <small>{post.author}</small>
      <small>{post.date}</small>
      <article>
        <p>{post.content}</p>
      </article>
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
      date
      content
    }
  }
`
