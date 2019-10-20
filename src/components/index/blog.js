import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import arrow from "../../images/arrow.png"

export default () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulPost(limit: 2, sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
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
  `)

  const posts = query.allContentfulPost.edges
  console.log(posts)

  return (
    <>
      <div className={"section"}>
        <div className={"container limited"}>
          <h2>Blog</h2>

          {/* blog */}
          <div className={"columns is-multiline blog is-centered"}>
            {posts
              ? posts.map(post => (
                  <Link
                    to={post.node.slug}
                    className={"column image is-5-desktop is-11-tablet"}
                  >
                    <Img className={"img"} fluid={post.node.image.fluid} />
                  </Link>
                ))
              : null}
          </div>

          {/* more fade */}
          <div className={"more-fade"}>
            <Link to="/blog" className={"more-button"}>
              <img src={arrow} className={"arrow"} alt="down arrow"></img>
              <span className={"more"}>MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
