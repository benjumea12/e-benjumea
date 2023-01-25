import React, { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { navigate } from "gatsby"
import { RiWhatsappFill } from "@react-icons/all-files/Ri/RiWhatsappFill"
import { MdEmail } from "@react-icons/all-files/Md/MdEmail"
import { AiFillLinkedin } from "@react-icons/all-files/Ai/AiFillLinkedin"
import { AiOutlineGithub } from "@react-icons/all-files/Ai/AiOutlineGithub"
// Framer motion
import { motion, AnimatePresence } from "framer-motion"
// Styled components
import { Main } from "../styled/index.styled"
import {
  Layout,
  SVGDragon,
  SVGWarrior,
  SVGScene,
  ButtonReturn,
} from "../componets"

const IndexPage: React.FC<PageProps> = () => {
  const [showPage, setShowPage] = useState(true)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  /*

  var ancho = window.innerWidth / 2
  var alto = window.innerHeight / 2

  const mousemove = (event: any) => {
    const y =
      (event.pageY > alto ? -(event.pageY - alto) : alto - event.pageY) * 0.015
    const x =
      (event.pageX > ancho ? -(event.pageX - ancho) : ancho - event.pageX) *
      0.015

    setMousePosition({
      x: x,
      y: y,
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", mousemove)
    return () => {
      window.removeEventListener("mousemove", mousemove)
    }
  }, [])
  */

  const handleClick = () => {
    setShowPage(false)
    setTimeout(() => {
      navigate("/proyectos")
    }, 600)
  }

  const exit = {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  }

  return (
    <Layout>
      <AnimatePresence>
        {showPage && (
          <Main>
            <div className="section-title">
              {["ESTEBAN", "BENJUMEA", "CASTRILLON"].map((item, index) => (
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
                    delay: 4.3 - index,
                  }}
                >
                  {item}
                </motion.h1>
              ))}
            </div>
            <motion.div
              className="section-grafic"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              exit={exit}
            >
              <SVGScene />
              <motion.div
                className="frame"
                initial={{
                  opacity: 0,
                  transform: `translate(0px, 0px)`,
                }}
                animate={{
                  opacity: 1,
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
                transition={{
                  ease: "easeOut",
                  duration: 0.3,
                  opacity: {
                    delay: 1.3,
                    duration: 0.5,
                  },
                }}
              />
              <SVGWarrior />
              <SVGDragon />
            </motion.div>
            <motion.div className="section-text" exit={exit}>
              <motion.h2
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                transition={{
                  delay: 3,
                }}
              >
                FrontEnd Web/Movil
              </motion.h2>
              <motion.p
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                transition={{
                  delay: 4,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </motion.p>
              <motion.a
                href="#"
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                transition={{
                  delay: 5,
                }}
              >
                Descargar mi CV
              </motion.a>
              <motion.div
                className="redes"
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                transition={{
                  delay: 6,
                }}
              >
                <a href="#">
                  <RiWhatsappFill className="icon-item" />
                </a>
                <a href="#">
                  <MdEmail className="icon-item" />
                </a>
                <a href="#">
                  <AiFillLinkedin className="icon-item" />
                </a>
                <a href="#">
                  <AiOutlineGithub className="icon-item" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div exit={exit}>
              <ButtonReturn onClick={handleClick} title="Proyectos faforitos" />
            </motion.div>
          </Main>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
