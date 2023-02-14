import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { navigate } from "gatsby"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
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
  SEO,
} from "../componets"

const IndexPage: React.FC<PageProps> = () => {
  const [showPage, setShowPage] = useState(true)

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
                    delay: 3 - index * 0.5,
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
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 0.5,
                }}
              />
              <SVGWarrior />
              <SVGDragon />
            </motion.div>
            <motion.section className="section-text" exit={exit}>
              <motion.h2
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
                  delay: 2.5,
                }}
              >
                Si lo que buscas es alguien con excelente dominio en el
                desarrollo FrontEnd tanto Web como Movil, capacidad de maquetado
                de interfaces de usuario con estilos y animaciones específicas,
                habilidades para el diseño UI y UX y conocimientos sobre el
                desarrollo BackEnd y bases de datos. Con muchos deseos de
                mejorar mi experiencia y conocimientos, que sea un absoluto
                apasionado por su trabajo y tenga muchas ganas de romperla no
                dudes en contactarme.
              </motion.p>
              <motion.a
                href="https://drive.google.com/drive/folders/1eKZfFjzHSxNt-61-IRN9GsCuZO-Ib9NM?usp=sharing"
                target="_blank"
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
                Descargar mi CV
              </motion.a>
              <motion.footer
                className="redes"
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                transition={{
                  delay: 3.5,
                }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=573108246838"
                  target="_blank"
                  aria-label="Ir mi WhatsApp"
                >
                  <RiWhatsappFill className="icon-item" />
                </a>
                <a
                  href="mailto:benjumeac12@gmail.com"
                  target="_blank"
                  aria-label="Ir a mi email"
                >
                  <MdEmail className="icon-item" />
                </a>
                <a
                  href="https://www.linkedin.com/in/benjumea-c22?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3fJtS5ZARvavWMrNZXdzYw%3D%3D"
                  target="_blank"
                  aria-label="Ir a mi LinkedIn"
                >
                  <AiFillLinkedin className="icon-item" />
                </a>
                <a
                  href="https://github.com/benjumea12"
                  target="_blank"
                  aria-label="Ir a mi github"
                >
                  <AiOutlineGithub className="icon-item" />
                </a>
              </motion.footer>
            </motion.section>
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

export const Head = () => <SEO title="Home | E-Benjumea" />
