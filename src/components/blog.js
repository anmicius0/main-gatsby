import React, { useState, useEffect } from "react"
import Butter from "buttercms"
import { Link } from "gatsby"

import arrow from "../images/arrow.png"

export default () => {
  const [classList, setClassList] = useState(["container limited"])
  const [posts, setPosts] = useState()
  const butter = Butter("db07104b331d94843e152c512c464507483920c4")

  useEffect(() => {
    butter.post
      .list({ page: 1, page_size: 5 })
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
        <div className={classList}>
          <h2>Blog</h2>

          {/* blog */}
          <div className={"columns is-multiline blog is-centered"}>
            {posts
              ? posts.map(post => (
                  <div className={"column is-5-desktop is-11-tablet"}>
                    <h3>{post.title}</h3>
                    <p> Read More</p>
                  </div>
                ))
              : null}
          </div>

          {/* more fade */}
          <div className={"more-fade"}>
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
