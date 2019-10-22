import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const post = props.post

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          <Link to={"/blog/" + post.node.slug} id={"first-post"}>
            <figure className={"image"}>
              <Img fluid={post.node.image.fluid} alt="" />
            </figure>

            <div className={"first-post-title"}>
              <h2>
                {post.node.title.length > 20
                  ? post.node.title.slice(0, 85) + " ..."
                  : post.node.title}
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
