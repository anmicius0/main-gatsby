import React from "react"
import Img from "gatsby-image"

import gradient from "../../images/TealLove.jpg"

export default () => {
  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          <div className={"first-post"}>
            <figure className={"image"}>
              <Img fluid={post.fluid ? post.fluid : gradient} alt=""></Img>
            </figure>

            <div className={"first-post-title"}>
              <h2>
                {/* {post.title.length > 20
                  ? post.title.slice(0, 85) + " ..."
                  : post.title} */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
