import React from "react"
import type { HeadFC, PageProps } from "gatsby"
// Components
import { ButtonReturn, ProjectCard } from "../componets"
// Styled components
import { Main } from "../styled/proyectos.styled"
import { Layout, SVGCastle } from "../componets"
// Frame motion
import { motion, useScroll } from "framer-motion"

const ProyectosPage: React.FC<PageProps> = () => {
  const exit = {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  }

  const container = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 3,
        staggerChildren: 0.2,
      },
    }
  }

  const itemLi = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const handleClick = () => {}

  const { scrollY  } = useScroll();

  return (
    <Layout animate={false}>
      <ButtonReturn onClick={handleClick} title="Volver a Inicio" inverted />
      <Main>
        <SVGCastle />

        <div className="section-title">
          {["PROYECTOS", "FAVORITOS"].map((item, index) => (
            <motion.h1
              key={index}
              className="name"
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
              }}
              exit={exit}
              transition={{
                delay: 2 - index*0.5,
              }}
            >
              {item}
            </motion.h1>
          ))}
        </div>

        <motion.ul
          className="section-projects"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <motion.li key={index} className="item" variants={itemLi} style={{
              translateY: index % 2 === 0 ? `0` : `50%`
            }}>
              <ProjectCard />
            </motion.li>
          ))}
        </motion.ul>
      </Main>
    </Layout>
  )
}

export default ProyectosPage

export const Head: HeadFC = () => <title>Home Page</title>
