import React from "react"

import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <PageLayout>
    <SEO
      title="404: Not found"
      description="404 NOT FOUND: There is no data to visualize here."
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist. This is very sad.</p>
  </PageLayout>
)

export default NotFoundPage
