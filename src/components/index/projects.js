import React from "react"
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

  return (
    <>
      <div className={"section"}>
        <div className={"container"}>
          <h2>Projects</h2>
          <div className={"columns is-multiline is-centered projects"}>
            {data.map(project => (
              <a className={"column"} href={project.node.link}>
                <h3>{project.node.name}</h3>
                <button className={"button is-primary is-outlined"}>Go</button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
