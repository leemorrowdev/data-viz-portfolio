/**
 * Mdx layout
 */

import React from "react";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageLayout from "../page-layout";
import components from "./components";
import Seo from "../seo";
import { container, nav, dateText } from "./mdx-layout.module.scss";

const MdxLayout = ({
  location,
  data: {
    mdx: {
      body,
      fileAbsolutePath,
      frontmatter: { title, description, date },
    },
  },
}) => {
  const postsMatch = /src\/content\/posts/.test(fileAbsolutePath);
  const projectsMatch = /src\/content\/projects/.test(fileAbsolutePath);

  const { state = {} } = location;
  const { currentPage } = state || {};

  return (
    <PageLayout>
      <div className={container}>
        <div className={nav}>
          {postsMatch && (
            <Link
              to={`/posts/${
                currentPage ? (currentPage === 1 ? "" : currentPage) : ""
              }`}
            >
              &larr; All Posts
            </Link>
          )}
          {projectsMatch && (
            <Link
              to={`/projects/${
                currentPage ? (currentPage === 1 ? "" : currentPage) : ""
              }`}
            >
              &larr; All Projects
            </Link>
          )}
        </div>
        <h1>{title}</h1>
        <div className={dateText}>{date}</div>
        <Seo title={title} description={description} />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </PageLayout>
  );
};

export const ContentQuery = graphql`
  query ContentQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fileAbsolutePath
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default MdxLayout;
