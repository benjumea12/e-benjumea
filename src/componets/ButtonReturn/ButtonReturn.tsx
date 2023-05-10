import React from "react"
// Styled components
import { Main } from "./ButtonReturn.styled"
import SVGArrow from "../SVGArrow"
// Framer motion
import { motion } from "framer-motion"

const ButtonReturn = (props: {
  onClick: any
  title: string
  inverted?: boolean
}) => {
  const exit = {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  }
  return (
    <Main onClick={props.onClick} inverted={props.inverted}>
      <motion.div
        style={{
          overflow: "hidden",
        }}
        initial={{
          translateX: "-100vh",
        }}
        animate={{
          translateX: "-0",
        }}
        transition={{
          delay: 7,
        }}
        exit={exit}
      >
        <h4>{props.title}</h4>
        <SVGArrow />
      </motion.div>
    </Main>
  )
}

export default ButtonReturn
