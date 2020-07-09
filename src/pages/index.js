import React from "react"
import { Link, withPrefix } from "gatsby"

import MainLayout from "../components/layout/main"
import SEO from "../components/seo"
import RecentPosts from "../components/recent-posts"
import RecentProjects from "../components/recent-projects"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>
      Check out my <a href={withPrefix("/resume.pdf")}>resume</a>.
    </p>
    <RecentPosts />
    <RecentProjects />
  </MainLayout>
)

export default IndexPage
