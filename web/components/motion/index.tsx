"use client";
import { domAnimation, LazyMotion } from "motion/react";

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
};

export * from "motion/react-m";
