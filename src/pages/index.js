import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTABanner from "../components/CTABanner/CTABanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CTABanner />
  </Layout>
)

export default IndexPage
