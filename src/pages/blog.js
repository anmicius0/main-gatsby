import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SecondLanding from "../components/secondLanding"
import FirstPost from "../components/blog/firstPost"
import OtherPost from "../components/blog/otherPost"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SecondLanding title="Blog" />
      <FirstPost />
      <OtherPost />
    </Layout>
  )
}
