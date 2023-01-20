import React, { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { RiWhatsappFill } from "@react-icons/all-files/Ri/RiWhatsappFill"
import { MdEmail } from "@react-icons/all-files/Md/MdEmail"
import { AiFillLinkedin } from "@react-icons/all-files/Ai/AiFillLinkedin"
import { AiOutlineGithub } from "@react-icons/all-files/Ai/AiOutlineGithub"
// Framer motion
import { motion } from "framer-motion"
// Styled components
import { Main } from "../styled/index.styled"
import { Layout, SVGDragon, SVGWarrior, SVGScene } from "../componets"

const IndexPage: React.FC<PageProps> = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

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

  return (
    <Layout>
      <Main>
        <div className="section-title">
          {["ESTEBAN", "BENJUMEA", "CASTRILLON"].map((item, index) => (
            <motion.h1
              className="name"
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
              }}
              transition={{
                delay: 3 - index,
              }}
            >
              {item}
            </motion.h1>
          ))}
        </div>
        <div className="section-grafic">
          <SVGScene />
          <motion.div
            className="frame"
            initial={{
              transform: `translate(0px, 0px)`,
            }}
            animate={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
            }}
          />
          <SVGWarrior />
          <SVGDragon />
        </div>
        <div className="section-text">
          <motion.h2
            initial={{
              height: 0,
            }}
            animate={{
              height: "auto",
            }}
            transition={{
              delay: 1,
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
              delay: 1.5,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
              delay: 2,
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
              delay: 2.5,
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
        </div>
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
