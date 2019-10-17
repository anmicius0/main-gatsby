import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/Landing"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Banner from "../components/banner"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <Skills />
      <Projects />
      <Banner />
    </Layout>
  )
}
