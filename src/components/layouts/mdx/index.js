/**
 * Main layout component with custom SEO
 */

import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import MainLayout from '../main';
import MDXComponents from '../../mdx-components';
import SEO from '../../seo';

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
      <MDXProvider components={MDXComponents}>
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
