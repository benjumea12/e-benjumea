import React from "react"
// Theme
import { opacityMotion } from "../../theme"
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
  return (
    <Main onClick={props.onClick} inverted={props.inverted}>
      <motion.div {...opacityMotion}>
        <h4>{props.title}</h4>
        <SVGArrow />
      </motion.div>
    </Main>
  )
}

export default ButtonReturn
