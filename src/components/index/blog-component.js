import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import arrow from "../../images/arrow.png"

export default () => {
  const posts = useStaticQuery(graphql`
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
  `).allContentfulPost.edges

  return (
    <>
      <div className={"section"}>
        <div className={"container limited"}>
          <h2>Blog</h2>

          {/* blog */}
          <div className={"columns is-multiline posts is-centered"}>
            {posts
              ? posts.map(post => (
                  <Link
                    to={"/blog/" + post.node.slug}
                    className={"column image is-5-desktop is-11-tablet"}
                  >
                    <Img className={"img"} fluid={post.node.image.fluid} />
                  </Link>
                ))
              : null}
          </div>

          {/* more fade */}
          <div id={"more-fade"}>
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
