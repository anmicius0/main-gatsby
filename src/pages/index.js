import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/Landing"
import Skills from "../components/skills"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <Skills />
    </Layout>
  )
}
