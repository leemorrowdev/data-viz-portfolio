import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import MainLayout from '../main';
import SEO from '../../seo';

const shortcodes = { Link }; // Provide common components here

const MdxLayout = ({
  data: {
    mdx: {
      body,
      frontmatter: { title },
    },
  },
}) => {
  return (
    <MainLayout>
      <h1>{title}</h1>
      <SEO title={title} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

export default MdxLayout;
