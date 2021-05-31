/**
 * Test visualization
 */

import React, { useEffect, useRef } from "react";
// import * as d3 from "d3"

import { useChartDimensions } from "../../../utils/use-chart-dimensions";
import { useScrollama } from "../../../utils/use-scrollama";
import { container, chart } from "./chart.module.scss";

const Chart = () => {
  const svgRef = useRef();
  const [wrapperRef, dms] = useChartDimensions();
  const [index, direction] = useScrollama();

  useEffect(() => {
    // const svg = d3.select(svgRef.current)
  }, [dms, index, direction]);

  return (
    <div className={container} ref={wrapperRef}>
      <svg
        className={chart}
        ref={svgRef}
        width={dms.width}
        height={dms.height}
      />
    </div>
  );
};

export default Chart;
