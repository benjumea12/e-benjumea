import React, { FC, useState, Fragment } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { navigate } from "gatsby"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
// Framer motion
import { motion, AnimatePresence } from "framer-motion"
// Theme
import { opacityMotion } from "../theme"
// Styled components
import { Main } from "../styled/index.styled"
import {
  Layout,
  SVGDragon,
  SVGWarrior,
  SVGScene,
  ButtonReturn,
} from "../componets"

const IndexPage: FC<PageProps> = () => {
  const [showPage, setShowPage] = useState(true)

  const handleClick = () => {
    setShowPage(false)
    setTimeout(() => {
      navigate("/proyectos")
    }, 600)
  }
  return (
    <Layout>
      <AnimatePresence>
        {showPage && (
          <Fragment>
            <Main>
              <div className="section-title">
                <motion.h1 className="title" {...opacityMotion}>
                  ESTEBAN <br /> BENJUMEA <br /> CASTRILLON
                </motion.h1>
              </div>
              <motion.div className="section-grafic" {...opacityMotion}>
                <SVGScene />
                <motion.div className="frame" {...opacityMotion} />
                <SVGWarrior />
                <SVGDragon />
              </motion.div>
              <motion.div className="section-text" {...opacityMotion}>
                <h2>FrontEnd Web/Movil</h2>
                <p>
                  Soy un apasionado desarrollador con un sólido dominio en el
                  ámbito del Frontend. Poseo una destacada capacidad para
                  realizar el maquetado de interfaces con estilos y animaciones
                  personalizadas. Mis conocimientos técnicos abarcan tecnologías
                  como HTML, CSS y JavaScript, y cuento con experiencia en el
                  uso de React tanto para aplicaciones web como para
                  aplicaciones móviles utilizando React Native. <br /> Además,
                  poseo habilidades en el diseño UI/UX, y conocimientos de
                  BackEnd y bases de datos.
                </p>
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1eKZfFjzHSxNt-61-IRN9GsCuZO-Ib9NM?usp=sharing"
                >
                  Descargar mi CV
                </a>
                <div className="redes">
                  <a
                    href="https://api.whatsapp.com/send?phone=573108246838"
                    target="_blank"
                  >
                    <RiWhatsappFill className="icon-item" />
                  </a>
                  <a href="mailto:benjumeac12@gmail.com" target="_blank">
                    <MdEmail className="icon-item" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/benjumea-c22?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3fJtS5ZARvavWMrNZXdzYw%3D%3D"
                    target="_blank"
                  >
                    <AiFillLinkedin className="icon-item" />
                  </a>
                  <a href="https://github.com/benjumea12" target="_blank">
                    <AiOutlineGithub className="icon-item" />
                  </a>
                </div>
              </motion.div>
            </Main>
            <ButtonReturn onClick={handleClick} title="Proyectos favoritos" />
          </Fragment>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>E-Benjumea | Inicio</title>
    <meta property="og:image" content="https://i.imgur.com/nubB0AR.png" />
  </>
)
