import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            color
            icon
            id
            name
          }
        }
      }
    }
  `).allSkillsJson.edges

  return (
    <>
      <div className={"section"}>
        <div className={"container skills"}>
          <h2>Skills</h2>
          <div className={"columns is-mutiline"}>
            {data.map(skill => (
              <div className={"column"}>
                <span className={"icon"}>
                  <i
                    className={skill.node.icon}
                    style={{ color: skill.node.color }}
                  ></i>
                </span>
                <br />
                <h3>{skill.node.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
