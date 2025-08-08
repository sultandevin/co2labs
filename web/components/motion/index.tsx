"use client";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export const MotionDiv = m.div;

export const MotionSection = m.section;

export const MotionH1 = m.h1;

export const MotionH2 = m.h2;

export const MotionH3 = m.h3;

export const MotionH4 = m.h4;

export const MotionH5 = m.h5;

export const MotionH6 = m.h6;

export const MotionP = m.p;

export const MotionSVG = m.svg;
