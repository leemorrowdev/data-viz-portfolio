import React from "react"
import { withPrefix } from "gatsby"

import MainLayout from "../components/layout/main"
import SEO from "../components/seo"
import RecentPosts from "../components/recent-posts"
import RecentProjects from "../components/recent-projects"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi, my name is Lee</h1>
    <p>
      I'm a front end developer interested in building interactive data
      visualizations in React and D3. I love learning about economics, finance,
      and statistics, and want to help facilitate better visual communication
      and understanding.
    </p>
    <p>
      Check out my blog posts and projects below for content on front end
      development and interesting data visualizations.
    </p>
    <p>
      Interested in working with me? Here's my{" "}
      <a href={withPrefix("/resume.pdf")}>resume</a>.
    </p>
    <RecentPosts />
    <RecentProjects />
  </MainLayout>
)

export default IndexPage
