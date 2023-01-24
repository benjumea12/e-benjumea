import React from "react"
// Components
import { SVGArrow } from "../"
// Frame motion
import { motion } from "framer-motion"
// Styled components
import { Main } from "./ProjectCard.styled"
// Images
import image from "../../images/cartel.png"

const ProjectCard = (props: {}) => {
  return (
    <Main>
      <img src={image} alt="Imagen del proyecto" />
      <div className="card-content">
        <h2>Nombre del proyecto</h2>
        <SVGArrow />
      </div>
      <motion.div className="border border-1"></motion.div>
      <motion.div className="border border-2"></motion.div>
      <motion.div className="border border-3"></motion.div>
    </Main>
  )
}

export default ProjectCard
