/**
 * Scrollyteller
 * 
 * Connect ui to react scrollama and handles sticky behavior and layout style
 */

import React from "react";

import { ScrollamaProvider, Step as ScrollamaStep } from "../react-scrollama";
import {
  container,
  column,
  sticky,
  left,
  right,
} from "./scrollyteller.module.scss";

export const Scrollyteller = ({ children }) => {
  return (
    <ScrollamaProvider>
      <div className={container}>{children}</div>
    </ScrollamaProvider>
  );
};

export const Step = ({ children, step }) => (
  <ScrollamaStep step={step}>{children}</ScrollamaStep>
);

export const Column = ({ children, orientation, type }) => {
  return (
    <div className={column}>
      <div
        className={[
          ...(orientation === "left" ? [left] : []),
          ...(orientation === "right" ? [right] : []),
          ...(type === "sticky" ? [sticky] : []),
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
