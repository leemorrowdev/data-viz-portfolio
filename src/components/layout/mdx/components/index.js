/**
 * MDX component styles
 */

import React from 'react';

import styles from './mdx-components.module.scss';

const MDXComponents = {
  h1: ({children, ...props}) => <h1 {...props} className={styles.h1}>{children}</h1>,
  p: ({children, ...props}) => <p {...props} className={styles.p}>{children}</p>,
};

export default MDXComponents;