import React from "react"

import MainLayout from "../components/layout/main"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist. This is very sad.</p>
  </MainLayout>
)

export default NotFoundPage
