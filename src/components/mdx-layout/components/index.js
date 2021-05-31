/**
 * MDX component shortcodes
 */

import React from "react";
import { Link } from "gatsby";

import {
  h2,
  blockquote,
  code,
  pre,
  ol,
  ul,
  li,
} from "./components.module.scss";

const components = {
  Link,
  h2: ({ children, ...props }) => (
    <h2 {...props} className={h2}>
      {children}
    </h2>
  ),
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote {...props} className={blockquote}>
      {children}
    </blockquote>
  ),
  inlineCode: ({ children, ...props }) => (
    <code {...props} className={code}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre {...props} className={pre}>
      {children}
    </pre>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className={ol}>
      {children}
    </ol>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props} className={ul}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className={li}>
      {children}
    </li>
  ),
};

export default components;
