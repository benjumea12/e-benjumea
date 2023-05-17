import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
// Components
import { SVGPrincess } from "../../componets"
// Styled components
import {
  Main,
  Image,
  Modal,
  modalOverlayMotion,
} from "../../styled/detalle.styled"
import { Layout } from "../../componets"
// Frame motion
import { motion, AnimatePresence } from "framer-motion"
import { opacityMotion, containerMotion, itemLiMotion } from "../../theme"
// Images
import { IoIosClose } from "react-icons/Io"

const ImagenDetalle = (props: { src: any; index: number; onClick: any }) => {
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

const DetallePage = (props: PageProps<Queries.DetallePageQuery>) => {
  const [selectedId, setSelectedId] = useState<any>(null)
  const [showPage, setShowPage] = useState(true)

  const projectData = props.data.allDataJson.edges[0].node
  const allImages: any = [projectData.startImg, projectData.gallery].flat()

  return (
    <Layout>
      <AnimatePresence>
        <SVGPrincess key="image-content" />

        <Modal>
          <AnimatePresence>
            {selectedId && (
              <motion.div className="modal-overlay" {...modalOverlayMotion}>
                <motion.div className="modal-image">
                  <motion.img
                    className="image"
                    src={allImages[selectedId - 1]}
                    layoutId={`item-image-${selectedId}`}
                  />
                  <motion.div
                    className="close"
                    layoutId={`item-close-${selectedId}`}
                    onClick={() => setSelectedId(null)}
                  >
                    <IoIosClose color="#FFFFFF" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Modal>

        {showPage && (
          <React.Fragment>
            <Main key="main-content">
              <motion.div className="content-top" {...opacityMotion}>
                <div className="info-section">
                  {projectData.personal ? (
                    <h5>Proyecto personal</h5>
                  ) : (
                    <h5>
                      Proyecto de{" "}
                      <a href="https://solucionsoft.com/" target="_blank">
                        @SOLUCIONSOFT
                      </a>
                    </h5>
                  )}

                  <h1>{projectData.title}</h1>
                  <p>{projectData.description}</p>

                  <div className="caracteristics">
                    <div className="technologies">
                      <h4>Tecnologías</h4>

                      <ul>
                        {projectData.development?.map(
                          (item: any, index: number) => (
                            <li key={index}>
                              <h6>{item}</h6>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="links">
                      <h4>Links</h4>

                      <ul>
                        {projectData.links?.map((item: any, index: number) => (
                          <li key={index}>
                            <a
                              href={
                                typeof item?.link === "string"
                                  ? item?.link
                                  : "#"
                              }
                            >
                              {item?.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="image image-item">
                  <ImagenDetalle
                    src={projectData.startImg}
                    index={1}
                    onClick={() => setSelectedId(1)}
                  />
                </div>
              </motion.div>

              <motion.h3 className="gallery-title" {...opacityMotion}>
                Galeria
              </motion.h3>

              <motion.div
                className="gallery"
                initial="hidden"
                animate="visible"
                {...containerMotion}
              >
                {projectData.gallery?.map((item: any, index: number) => (
                  <motion.div
                    className="image-item"
                    key={index}
                    {...itemLiMotion}
                  >
                    <ImagenDetalle
                      src={item}
                      index={index * 2}
                      onClick={() => setSelectedId(index * 2)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </Main>
          </React.Fragment>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default DetallePage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query DetallePage($slug: String) {
    allDataJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          order
          personal
          title
          startImg
          description
          development
          links {
            name
            link
          }
          gallery
        }
      }
    }
  }
`
