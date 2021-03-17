/**
 * MDX component styles
 */

import React from "react"
import { Link } from "gatsby"

import styles from "./components.module.scss"

const components = {
  Link,
  h2: ({ children, ...props }) => (
    <h2 {...props} className={styles.h2}>
      {children}
    </h2>
  ),
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote {...props} className={styles.blockquote}>
      {children}
    </blockquote>
  ),
  inlineCode: ({ children, ...props }) => (
    <code {...props} className={styles.code}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre {...props} className={styles.pre}>
      {children}
    </pre>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className={styles.ol}>
      {children}
    </ol>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props} className={styles.ul}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className={styles.li}>
      {children}
    </li>
  ),
}

export default components
