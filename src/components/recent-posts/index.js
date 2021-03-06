/**
 * Recent posts
 * 
 * Display the three most recent posts
 */

import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import { container } from "./recent-posts.module.scss";

const RecentPosts = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(recentPostsQuery);

  return (
    <div className={container}>
      <h2>Recent Posts</h2>

      <ul>
        {edges.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={`/posts${post.fields.slug}`}>
              <div>
                <h3>{post.frontmatter.title}</h3>
                <span>{post.frontmatter.date}</span>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/posts">All Posts &rarr;</Link>
    </div>
  );
};

const recentPostsQuery = graphql`
  query recentPosts {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/posts/" } }
      limit: 2
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default RecentPosts;
