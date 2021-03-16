/**
 * Test visualization
 */

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

import { useChartDimensions } from "../../../../modules/use-chart-dimensions"
import { useScrollama } from "../../../../modules/use-scrollama"
import styles from "./chart.module.scss"

const Chart = ({ containerClassName, settings }) => {
  const svgRef = useRef()
  const [wrapperRef, dms] = useChartDimensions(settings)
  const [index, direction] = useScrollama(containerClassName)

  useEffect(() => {
    const svg = d3.select(svgRef.current)
  }, [dms, index, direction])

  return (
    <div className={styles.container} ref={wrapperRef}>
      <svg
        className={styles.chart}
        ref={svgRef}
        width={dms.width}
        height={dms.height}
      ></svg>
    </div>
  )
}

export default Chart
