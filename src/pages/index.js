import React from "react"
import { withPrefix } from "gatsby"

import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import RecentPosts from "../components/recent-posts"
import RecentProjects from "../components/recent-projects"
import styles from "./index.module.scss"

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <h1>
      <span className={styles.highlight}>Hi,</span> my name is Lee
    </h1>
    <p>
      I'm a front end developer interested in building interactive data
      visualizations in React and D3. I love learning about economics, finance, statistics, health, and exercise, 
      and want to help facilitate better visual communication and understanding.
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
  </PageLayout>
)

export default IndexPage
