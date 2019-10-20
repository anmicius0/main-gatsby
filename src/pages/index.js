import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Landing from "../components/index/Landing"
import Skills from "../components/index/skills"
import Projects from "../components/index/projects"
import Banner from "../components/index/banner"
import Blog from "../components/index/blog-component"
import About from "../components/index/about"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <Skills />
      <Projects />
      <Banner />
      <Blog />
      <About />
    </Layout>
  )
}
