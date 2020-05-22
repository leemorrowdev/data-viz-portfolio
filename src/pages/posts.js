import React from 'react';
import { Link } from 'gatsby';

import MainLayout from '../components/layout/main';
import SEO from '../components/seo';

const Posts = () => (
  <MainLayout>
    <SEO title="Posts" />
    <h1>Hi from the posts page</h1>
    <p>Welcome to the posts page</p>
    <Link to="/">Go back to the homepage</Link>
  </MainLayout>
);

export default Posts;