import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        edges {
          node {
            name
            link
            repository
          }
        }
      }
    }
  `).allProjectsJson.edges

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          <h2>Projects</h2>
          <div className={"columns is-multiline is-centered"} id={"projects"}>
            {data.map(project => (
              <div className={"column"}>
                <h3>{project.node.name}</h3>
                {/* link to website */}
                <button className={"button is-primary is-outlined is-large"}>
                  Go
                </button>

                {/* link to repository */}
                <a href={project.node.repository}>
                  <button className={"button is-primary is-outlined is-large"}>
                    <span className={"icon"}>
                      <i className={"fab fa-github"}></i>
                    </span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
