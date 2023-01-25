import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, navigate } from "gatsby"
// Components
import { ButtonReturn, SVGPrincess } from "../../componets"
// Styled components
import { Main, Image } from "../../styled/detalle.styled"
import { Layout } from "../../componets"
// Frame motion
import { motion, AnimatePresence } from "framer-motion"
// Images
import image from "../../images/cartel.png"
import { GrClose } from "@react-icons/all-files/Gr/GrClose"

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
    },
  }

  const itemLi = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const handleClick = () => {
    setShowPage(false)
    setTimeout(() => {
      navigate("/proyectos")
    }, 600)
  }

  return (
    <Layout animate={false}>
      <AnimatePresence>
        {showPage && (
          <React.Fragment>
            <SVGPrincess key="image-content" />
            <Main key="main-content">
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
                      className="modal-image"
                    >
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
                        <GrClose />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="content-top">
                <div className="text">
                  {projectData ? (
                    <motion.h5
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      exit={exit}
                      transition={{
                        delay: 5 * 0.5,
                      }}
                    >
                      Proyecto personal
                    </motion.h5>
                  ) : (
                    <motion.h5
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      exit={exit}
                      transition={{
                        delay: 5 * 0.5,
                      }}
                    >
                      Desarrolado en{" "}
                      <a href="https://solucionsoft.com/" target="_blank">
                        @SOLUCIONSOFT
                      </a>
                    </motion.h5>
                  )}

                  <motion.h1
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={exit}
                    transition={{
                      delay: 4 * 0.5,
                    }}
                  >
                    {projectData.title}
                  </motion.h1>
                  <motion.p
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={exit}
                    transition={{
                      delay: 3 * 0.5,
                    }}
                  >
                    {projectData.description}
                  </motion.p>

                  <motion.div
                    className="extra-info"
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={exit}
                    transition={{
                      delay: 2 * 0.5,
                    }}
                  >
                    <div className="Tecnologías">
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
                  </motion.div>
                </div>
                <motion.div
                  className="image image-item"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={exit}
                  transition={{
                    delay: 3,
                  }}
                >
                  <ImagenDetalle
                    src={projectData.startImg}
                    index={1}
                    onClick={() => setSelectedId(1)}
                  />
                </motion.div>
              </div>

              <motion.h3
                className="gallery-title"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={exit}
                transition={{
                  delay: 2 * 0.5,
                }}
              >
                Galeria
              </motion.h3>

              <motion.div
                className="gallery"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {projectData.gallery?.map((item: any, index: number) => (
                  <motion.div
                    className="image-item"
                    key={index}
                    variants={itemLi}
                  >
                    <ImagenDetalle
                      src={item}
                      index={index + 2}
                      onClick={() => setSelectedId(index + 2)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </Main>
            <ButtonReturn
              onClick={handleClick}
              title="Volver a proyectos"
              inverted
              key="button-return"
            />
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
