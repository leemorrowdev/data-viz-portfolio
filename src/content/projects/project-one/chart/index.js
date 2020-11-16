/**
 * Test visualization
 */

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

import { useChartDimensions } from "../../../../modules/hooks"
import styles from "./chart.module.scss"

const Chart = ({ settings }) => {
  const [wrapperRef, dms] = useChartDimensions(settings)
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    
  }, [dms]);

  return (
    <div className={styles.container} ref={wrapperRef}>
      <svg className={styles.chart} ref={svgRef} width={dms.width} height={dms.height}>

      </svg>
    </div>
  )
}

export default Chart;
