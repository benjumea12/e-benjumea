import React, { useState } from "react"
import type { PageProps } from "gatsby"
import { graphql, navigate } from "gatsby"
// Components
import { ButtonReturn, ProjectCard } from "../../componets"
// Styled components
import { Main } from "../../styled/proyectos.styled"
import { Layout, SVGCastle, SEO } from "../../componets"
// Frame motion
import { motion, AnimatePresence } from "framer-motion"

const ProyectosPage = (props: PageProps<Queries.ProyectosPageQuery>) => {
  const [showPage, setShowPage] = useState(true)

  const projects: any = props.data.allDataJson.edges
  const projectsData: any = projects.sort(
    (a: any, b: any) => a.node.order - b.node.order
  )

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

  const handleClick = (path: any) => {
    setShowPage(false)
    setTimeout(() => {
      navigate(path)
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
    <Layout animate={false}>
      <AnimatePresence>
        {showPage && (
          <React.Fragment>
            <Main key="content">
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
                      delay: 2 - index * 0.5,
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
                {projectsData.map((item: any, index: any) => (
                  <motion.li
                    key={item.node.slug}
                    className="item"
                    variants={itemLi}
                    exit={exit}
                    onClick={() => handleClick(item.node.slug)}
                  >
                    <ProjectCard project={item.node} />
                  </motion.li>
                ))}
              </motion.ul>
            </Main>
            <motion.div key="button-return" exit={exit}>
              <ButtonReturn
                onClick={() => handleClick("/")}
                title="Volver a Inicio"
                inverted
              />
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default ProyectosPage

export const Head = () => <SEO title="Proyectos | E-Benjumea" />

export const query = graphql`
  query ProyectosPage {
    allDataJson(sort: { order: ASC }) {
      edges {
        node {
          slug
          order
          title
          startImg
        }
      }
    }
  }
`
