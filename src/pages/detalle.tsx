import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
// Components
import { ButtonReturn, SVGPrincess } from "../componets"
// Styled components
import { Main, Image } from "../styled/detalle.styled"
import { Layout } from "../componets"
// Frame motion
import { motion, AnimatePresence } from "framer-motion"
// Images
import image from "../images/cartel.png"
import { GrClose } from "@react-icons/all-files/Gr/GrClose"

const ImagenDetalle = (props: { src: string; index: number; onClick: any }) => {
  return (
    <Image onClick={props.onClick}>
      <motion.img
        layoutId={`item-image-${props.index}`}
        src={props.src}
        alt=""
      />
      <motion.div className="border border-1"></motion.div>
      <motion.div className="border border-2"></motion.div>
      <motion.div className="border border-3"></motion.div>
    </Image>
  )
}

const DetallePage: React.FC<PageProps> = () => {
  const [selectedId, setSelectedId] = useState<any>(null)

  const items: any = []

  const handleClick = () => {}

  return (
    <Layout animate={false}>
      <ButtonReturn onClick={handleClick} title="Volver a proyectos" inverted />

      <SVGPrincess />
      <Main>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="modal-overlay"
              initial={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
              animate={{
                backgroundColor: "rgba(0, 0, 0, .5)",
              }}
              exit={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                layoutId={`item-content-${selectedId}`}
                className="modal-image"
              >
                <motion.img
                  className="image"
                  src={image}
                  layoutId={`item-image-${selectedId}`}
                />
                <motion.div
                  className="close"
                  onClick={() => setSelectedId(null)}
                >
                  <GrClose />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="content-top">
          <div className="text">
            <h5>
              Desarrolado en{" "}
              <a href="https://solucionsoft.com/" target="_blank">
                @SOLUCIONSOFT
              </a>
            </h5>
            <h1>Nombre del proyecto</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="extra-info">
              <div className="links">
                <h4>Links</h4>

                <ul>
                  <li>
                    <a href="#">Proyecto publicado</a>
                  </li>
                  <li>
                    <a href="#">Repositorio</a>
                  </li>
                </ul>
              </div>
              <div className="Tecnologías">
                <h4>Tecnologías</h4>

                <ul>
                  <li>
                    <h6>React</h6>
                  </li>
                  <li>
                    <h6>React Native</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="image">
            <ImagenDetalle
              src={image}
              index={0}
              onClick={() => setSelectedId(0)}
            />
          </div>
        </div>

        <h3 className="gallery-title">Galeria</h3>

        <div className="gallery">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div className="image-item">
              <ImagenDetalle
                src={image}
                index={item}
                onClick={() => setSelectedId(item)}
              />
            </div>
          ))}
        </div>
      </Main>
    </Layout>
  )
}

export default DetallePage

export const Head: HeadFC = () => <title>Home Page</title>
