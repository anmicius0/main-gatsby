import React from "react"

import gradient from "../../images/TealLove.jpg"

export default () => {
  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          {/* blog */}
          <div className={"columns is-multiline blog is-centered"}>
            {/* {posts
              ? posts.map(post => (
                  <div
                    className={
                      "column card no-border no-margin is-3-desktop is-6-tablet"
                    }
                  >
                    <div className={"card-image"}>
                      <figure className={"image"}>
                        <img
                          src={
                            post.featured_image ? post.featured_image : gradient
                          }
                          alt=""
                        ></img>
                      </figure>
                    </div>

                    <div className={"card-content"}>
                      <h3>
                        if the title is too long
                        {post.title.length > 20
                          ? post.title.slice(0, 27) + " ..."
                          : post.title}
                      </h3>
                    </div>
                  </div>
                ))
              : null} */}
          </div>
        </div>
      </div>
    </>
  )
}
