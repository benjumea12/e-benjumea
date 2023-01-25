import React from "react"
// Components
import { SVGArrow } from "../"
// Frame motion
import { motion } from "framer-motion"
// Styled components
import { Main } from "./ProjectCard.styled"
// Images
import image from "../../images/cartel.png"

const ProjectCard = (props: { project: any }) => {
  const { project } = props
  return (
    <Main>
      <img src={project.startImg} alt={project.title} />
      <div className="card-content">
        <h2>{project.title}</h2>
        <SVGArrow />
      </div>
      <motion.div className="border border-1"></motion.div>
      <motion.div className="border border-2"></motion.div>
      <motion.div className="border border-3"></motion.div>
    </Main>
  )
}

export default ProjectCard
