import React from "react"

import { m as motion } from "framer-motion"

type SwipeUpProps = {
  delayMs?: number
}

export const SwipeUp: React.FC<SwipeUpProps> = ({ delayMs = 0.3, children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        opacity: 0,
        y: 100
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delayMs
        }
      }
    }}
  >
    {children}
  </motion.div>
)
