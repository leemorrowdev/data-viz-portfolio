/**
 * Scrollytelling component
 */

import React from "react"

import styles from "./scrollyteller.module.scss"

const Scrollyteller = ({ children, className }) => {
  return (
    <div className={className}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export const StaticColumn = ({ children }) => {
  return (
    <div className={styles.column}>
      <div className={styles.static}>
        {children}
      </div>
    </div>
  )
}

export const ScrollyColumn = ({ children }) => {
  return (
    <div className={styles.column}>
      <div className={styles.scrolly}>
        {children}
      </div>
    </div>
  )
}

export const Step = ({ children, className }) => {
  return (
    <div className={"step"}>
      <div className={className}>{children}</div>
    </div>
  )
}

export default Scrollyteller
