import React, { useState, useEffect } from "react"
import Butter from "buttercms"

import gradient from "../../images/TealLove.jpg"

export default () => {
  const butter = Butter("db07104b331d94843e152c512c464507483920c4")
  const [posts, setPosts] = useState()

  useEffect(() => {
    butter.post
      .list({ page: 1, page_size: 8 })
      .then(res => {
        console.log(res.data.data)
        setPosts(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          {/* blog */}
          <div className={"columns is-multiline blog is-centered"}>
            {posts
              ? posts.map(post => (
                  <div
                    className={
                      "column card no-border no-margin is-3-desktop is-6-tablet"
                    }
                  >
                    <div className={"card-image"}>
                      <figure className={"image is-4by3"}>
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
                        {/* if the title is too long */}
                        {post.title.length > 20
                          ? post.title.slice(0, 27) + " ..."
                          : post.title}
                      </h3>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  )
}
