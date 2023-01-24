import React from "react"
// Framer motion
import { motion } from "framer-motion"
// Styled components
import { Main } from "./SVGCastle.styled"

const SVGScene = () => {
  const icon = {
    hidden: {
      fill: "#0000000"
    },
    visible: {
      fill: "#000000"
    },
  }

  const transition = {
    delay: .5,
    duration: .5,
  }
  return (
    <Main>
      <motion.div>
        <motion.svg className="svg-castle" viewBox="0 0 1164 721" fill="none">
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
        </motion.svg>
      </motion.div>
    </Main>
  )
}

export default SVGScene