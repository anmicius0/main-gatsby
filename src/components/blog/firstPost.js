import React from "react"

export default props => {
  const post = props.post

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          <div className={"first-post"}>
            <figure className={"image"}>
              <img src={post.node.image.file.url} alt="" />
            </figure>

            <div className={"first-post-title"}>
              <h2>
                {post.node.title.length > 20
                  ? post.node.title.slice(0, 85) + " ..."
                  : post.node.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
