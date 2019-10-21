import React from "react"

export default props => {
  return (
    <>
      <div className={"hero"}>
        <div className={"hero-body title"}>
          <div className={"container"}>
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
