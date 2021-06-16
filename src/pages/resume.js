import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ResumePage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Resume — {site.siteMetadata.title}</title>
        <meta name="description" content={"Resume page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="grid">
        <h2>DT Professional Services</h2>
        <h3>AEM Developer</h3>
      </div>
    </Layout>
  )
}
export default ResumePage
export const pageQuery = graphql`
  query ResumePageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`