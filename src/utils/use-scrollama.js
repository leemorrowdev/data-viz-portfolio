/**
 * Return updated chart dimensions based on window size
 */

import { useContext } from "react"

import { ScrollamaContext } from "../components/project-layouts/scrollama"

export const useScrollama = () => {
  const context = useContext(ScrollamaContext)

  if (context === undefined) {
    throw new Error("useScrollama must be used within a ScrollamaProvider")
  }

  const { index, direction } = context

  return [index, direction]
}
