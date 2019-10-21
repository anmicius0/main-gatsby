import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const posts = props.posts
  console.log(posts)
  posts.forEach(post => {
    console.log(post)
  })

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          {/* blog */}
          <div className={"columns is-multiline is-centered"} id={"posts"}>
            {posts
              ? posts.map(post => (
                  <Link
                    to={post.node.slug}
                    className={"column card is-3-desktop is-6-tablet"}
                  >
                    <div className={"card-image"}>
                      <figure className={"image"}>
                        <Img fluid={post.node.image.fluid} alt="" />
                      </figure>
                    </div>

                    <div className={"card-content"}>
                      <h3>
                        {/* if the title is too long */}
                        {post.node.title.length > 20
                          ? post.node.title.slice(0, 27) + " ..."
                          : post.node.title}
                      </h3>
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  )
}
