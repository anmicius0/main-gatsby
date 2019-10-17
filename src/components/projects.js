import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `).allProjectsJson.edges

  const [classList, setClassList] = useState(["container limited"])
  const moreFade = useRef(null)

  // expand the projects list, hide more-fade
  const unlimited = () => {
    setClassList(["container"])
    moreFade.current.style.display = "none"
  }

  // If there is no more than 5 projects, than call unlimited()
  useEffect(() => {
    if (data.length < 5) {
      unlimited()
    }
  }, [])

  data.forEach(project => {
    console.log(project.node)
  })

  return (
    <>
      <div className={"section"}>
        <div className={classList}>
          <h2>Projects</h2>

          {/* Project list */}
          <div className={"columns is-multiline is-centered projects"}>
            {data.map(project => (
              <a className={"column"} href={project.node.link}>
                <h3>{project.node.name}</h3>
                <button className={"button is-primary is-outlined"}>Go</button>
              </a>
            ))}
          </div>

          {/* More fade */}
          <div
            className={"more-fade"}
            onClick={() => unlimited()}
            ref={moreFade}
          >
            <div className={"more-button"}>
              <img
                src={`../images/arrow.png`}
                className={"arrow"}
                alt="more"
              ></img>
              <span className={"more"}>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
