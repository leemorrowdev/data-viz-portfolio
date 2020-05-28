/**
 * Main layout component with custom SEO
 */

import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import MainLayout from '../../components/layout/main';
import MDXComponents from './components';
import SEO from '../../components/seo';
import styles from './mdx-layout.module.scss';

const MdxLayout = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, date },
    },
  },
}) => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.date}>{date}</div>
        <SEO title={title} />
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </MainLayout>
  );
};

export const postQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default MdxLayout;
