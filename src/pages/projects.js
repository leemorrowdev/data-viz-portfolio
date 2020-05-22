import React from 'react';
import { Link } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';

const Projects = () => (
  <MainLayout>
    <SEO title="Projects" />
    <h1>Hi from the projects page</h1>
    <p>Welcome to the projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </MainLayout>
);

export default Projects;