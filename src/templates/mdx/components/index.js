/**
 * MDX component styles
 */

import React from "react"

import styles from "./mdx-components.module.scss"

const MDXComponents = {
  p: ({ children, ...props }) => (
    <p {...props} className={styles.p}>
      {children}
    </p>
  ),
  // https://stackoverflow.com/questions/6382023/changing-the-color-of-an-hr-element
  hr: ({ children, ...props }) => (
    <hr {...props} className={styles.hr}>
      {children}
    </hr>
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
  li: ({ children, ...props }) => (
    <li {...props} className={styles.li}>
      {children}
    </li>
  ),
}

export default MDXComponents
