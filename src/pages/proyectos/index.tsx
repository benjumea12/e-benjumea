import React, { Fragment, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, navigate } from "gatsby"
// Components
import { ProjectCard } from "../../componets"
// Styled components
import { Main } from "../../styled/proyectos.styled"
import { Layout, SVGCastle } from "../../componets"
// Theme
import { opacityMotion, containerMotion, itemLiMotion } from "../../theme"
// Frame motion
import { motion, AnimatePresence } from "framer-motion"

const ProyectosPage = (props: PageProps<Queries.ProyectosPageQuery>) => {
  const [showPage, setShowPage] = useState(true)

  const projects: any = props.data.allDataJson.edges
  const projectsData: any = projects.sort(
    (a: any, b: any) => a.node.order - b.node.order
  )

  const handleClick = (path: any) => {
    setShowPage(false)
    setTimeout(() => {
      navigate(path)
    }, 600)
  }

  return (
    <Layout>
      <AnimatePresence>
        {showPage && (
          <Fragment>
            <SVGCastle />
            <Main>
              <motion.h1 className="title" {...opacityMotion}>
                PROYECTOS <br /> FAVORITOS
              </motion.h1>

              <motion.ul
                className="section-projects"
                initial="hidden"
                animate="visible"
                {...containerMotion}
              >
                {projectsData.map((item: any, index: any) => (
                  <motion.li
                    key={item.node.slug}
                    className="item"
                    {...itemLiMotion}
                    onClick={() => handleClick(item.node.slug)}
                  >
                    <ProjectCard project={item.node} />
                  </motion.li>
                ))}
              </motion.ul>
            </Main>
          </Fragment>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default ProyectosPage

export const Head: HeadFC = () => <title>Home Page</title>

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
