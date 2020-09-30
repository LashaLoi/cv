import React, { memo } from "react"
import { motion } from "framer-motion"

export const FadeIn: React.FC<{ delayMs?: number }> = memo(({ delayMs = 0.1, children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: delayMs
        }
      }
    }}
  >
    {children}
  </motion.div>
))
