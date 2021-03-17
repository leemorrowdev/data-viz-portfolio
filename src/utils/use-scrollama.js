/**
 * Return updated chart dimensions based on window size
 */

import { useState, useEffect } from "react"
import scrollama from "scrollama"
import * as d3 from "d3"

export const useScrollama = (containerClassName, passedSettings) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState("")

  useEffect(() => {
    const scroller = scrollama()

    scroller
      .setup({
        step: `.step`,
        ...passedSettings,
      })
      .onStepEnter(response => {
        setIndex(response.index)
        setDirection(response.direction)
      })
      .onStepExit(response => {
        setIndex(response.index)
        setDirection(response.direction)
      })

    const container = d3.select(`.${containerClassName}`).node()
    const resizeObserver = new ResizeObserver(() => scroller.resize())
    resizeObserver.observe(container)
    return () => resizeObserver.unobserve(container)
  }, [containerClassName, passedSettings])

  return [index, direction]
}
