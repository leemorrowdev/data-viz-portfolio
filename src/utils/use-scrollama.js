/**
 * Return updated chart dimensions based on window size
 */

import { useState, useLayoutEffect, useContext } from "react"
import scrollama from "scrollama"

import { ScrollamaContext } from "../components/project-layouts/scrollama"

export const useScrollama = passedSettings => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState("")
  const scrollamaElement = useContext(ScrollamaContext)

  useLayoutEffect(() => {
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

    if (scrollamaElement !== null) {
      const resizeObserver = new ResizeObserver(() => scroller.resize())
      resizeObserver.observe(scrollamaElement)
      return () => resizeObserver.unobserve(scrollamaElement)
    }
  }, [passedSettings, scrollamaElement])

  return [index, direction]
}
