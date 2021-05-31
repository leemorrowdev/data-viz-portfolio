/**
 * React Scrollama
 */

import React, { useRef, useEffect, useState, createContext } from "react";
import scrollama from "scrollama";

export const ScrollamaContext = createContext();

export const ScrollamaProvider = ({ children, passedSettings }) => {
  const ref = useRef();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const element = ref.current;
    const scroller = scrollama();

    scroller
      .setup({
        ...passedSettings,
        step: passedSettings?.step ?? ".step",
      })
      .onStepEnter((response) => {
        setIndex(response.index);
        setDirection(response.direction);
      })
      .onStepExit((response) => {
        setIndex(response.index);
        setDirection(response.direction);
      });

    const resizeObserver = new ResizeObserver(() => scroller.resize());
    resizeObserver.observe(element);
    return () => resizeObserver.unobserve(element);
  }, [passedSettings]);

  return (
    <ScrollamaContext.Provider value={{ index, direction }}>
      <div ref={ref}>{children}</div>
    </ScrollamaContext.Provider>
  );
};

export const Step = ({ children, step }) => {
  return <div className={step ?? "step"}>{children}</div>;
};
