import React, { useState } from "react"
import Butter from "buttercms"

import gradient from "../../images/TealLove.jpg"

export default () => {
  const butter = Butter("db07104b331d94843e152c512c464507483920c4")
  const [post, setPost] = useState()

  butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
    setPost(response.data.data[0])
  })

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          <div className={"first-post"}>
            <figure className={"image"}>
              <img src={gradient} alt=""></img>
            </figure>

            <div className={"first-post-title"}>
              <h2>
                {post.title.length > 20
                  ? post.title.slice(0, 85) + " ..."
                  : post.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
