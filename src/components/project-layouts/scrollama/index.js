/**
 * Scrollytelling component
 */

import React, { useState, useCallback, createContext } from "react"

import styles from "./scrollama.module.scss"

export const ScrollamaContext = createContext()

const Scrollama = ({ children }) => {
  const [scrollamaElement, setScrollamaElement] = useState(null)

  // https://github.com/facebook/react/issues/14387
  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const scrollamaRef = useCallback(node => {
    if (node !== null) {
      setScrollamaElement(node)
    }
  }, [])

  return (
    <ScrollamaContext.Provider value={scrollamaElement}>
      <div ref={scrollamaRef}>
        <div className={styles.container}>{children}</div>
      </div>
    </ScrollamaContext.Provider>
  )
}

export const StaticColumn = ({ children }) => {
  return (
    <div className={styles.column}>
      <div className={styles.static}>{children}</div>
    </div>
  )
}

export const ScrollyColumn = ({ children }) => {
  return (
    <div className={styles.column}>
      <div className={styles.scrolly}>{children}</div>
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

export default Scrollama
