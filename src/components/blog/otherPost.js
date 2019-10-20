import React from "react"
import { Link } from "gatsby"

export default props => {
  const posts = props.posts
  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          {/* blog */}
          <div className={"columns is-multiline blog is-centered"}>
            {posts
              ? posts.map(post => (
                  <Link
                    to={post.node.slug}
                    className={
                      "column card no-border no-margin is-3-desktop is-6-tablet"
                    }
                  >
                    <div className={"card-image"}>
                      <figure className={"image"}>
                        <img src={post.node.image.file.url} alt=""></img>
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
