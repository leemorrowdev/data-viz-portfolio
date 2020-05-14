import React from 'react';
import { Link } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';
import PostsIndex from '../components/posts-index';
import ProjectsIndex from '../components/projects-index';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <PostsIndex/>
    <ProjectsIndex/>

  </MainLayout>
);

export default IndexPage;
