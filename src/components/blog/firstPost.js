import React from "react"
import Butter from "buttercms"

import gradient from "../../images/TealLove.jpg"

export default props => {
  const butter = Butter("your_api_token")

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
