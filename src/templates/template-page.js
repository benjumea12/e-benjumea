import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
// Components
import { Layout, SEO, Typography, Image } from "../components"
// Styles
import { Main } from "./template.styled"
// Lazy load

const TemplatePage = ({ data }) => {
  const page = data.projectsJson

  return (
    <Layout>
      <SEO title={page.title} />
      <Main>
        <section className="header">
          <Link to={`/`} className="return">
            <FontAwesomeIcon className="icon" icon={faArrowLeft} />
          </Link>
          <Typography variant="h1" text={page.title} />

          <div className="content">
            <div className="img">
              <Image img={page.startImg} />
            </div>
            <div className="presentation">
              <Typography variant="p" delay={1} text={page.presentation} />
            </div>
          </div>
        </section>

        {
          /*page.description !== ''*/ false && (
            <section className="description">
              <div className="text">
                <Typography variant="p" delay={2} text={page.description} />
              </div>
            </section>
          )
        }

        <div className="flex">
          {page.links.length > 0 && (
            <section className="section links">
              <Typography variant="h2" text="Links" />

              <div className="text">
                <ul>
                  {page.links.map((item, index) => (
                    <li key={index}>
                      <a href={`${item.link}`} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                {page.addText && (
                  <div className="text">
                    <Typography variant="p" delay={3} text={page.addText} />
                  </div>
                )}
              </div>
            </section>
          )}
          {page.development !== "" && (
            <section className="section development">
              <Typography variant="h2" text="Desarrollo" />

              <div className="text">
                <Typography variant="p" delay={3} text={page.development} />
              </div>
            </section>
          )}
        </div>

        <section className="gallery">
          <Typography variant="h2" text="Galería" />

          {page.gallery.map((section, index) => (
            <div className="section" key={`section-${index}`}>
              <h2>{section.name}</h2>

              <div className="images">
                {section.images.map((image, indexImg) => (
                  <Image
                    img={image}
                    width="20em"
                    delay={indexImg}
                    key={`img-${index}-${indexImg}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($project: String!) {
    projectsJson(path: { eq: $project }) {
      description
      development
      path
      presentation
      startImg
      title
      addText
      links {
        name
        link
      }
      gallery {
        name
        images
      }
    }
  }
`

export default TemplatePage
