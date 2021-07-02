/**
 * Home
 */

import React from "react";
import { withPrefix } from "gatsby";

import PageLayout from "../components/page-layout";
import Seo from "../components/seo";
import RecentPosts from "../components/recent-posts";
import RecentProjects from "../components/recent-projects";
import { highlight } from "./index.module.scss";

const IndexPage = () => (
  <PageLayout>
    <Seo title="Home" />
    <h1>
      <span className={highlight}>Hi,</span> my name is Lee
    </h1>
    <p>
      I'm a front end developer with a passion for building interactive data
      visualizations in React and D3. I love learning and creating fascinating projects about whatever interests me, mostly running. 
    </p>
    <p>
      Check out my posts and projects below!
    </p>
    <p>
      Interested in working with me? Here's my{" "}
      <a href={withPrefix("/resume.pdf")}>resume</a>.
    </p>
    <RecentPosts />
    <RecentProjects />
  </PageLayout>
);

export default IndexPage;
