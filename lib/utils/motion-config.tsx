import React from "react"
import { MotionConfig, AnimationFeature, AnimateLayoutFeature } from "framer-motion"

export const MotionProvider: React.FC = ({ children }) => (
  <MotionConfig features={[AnimationFeature, AnimateLayoutFeature]}>{children}</MotionConfig>
)
