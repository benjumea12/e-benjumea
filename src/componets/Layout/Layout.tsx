import React, { ReactElement } from "react"
import "./style.css"
// Framer motion
import { motion } from "framer-motion"
// Styled components
import { ThemeProvider } from "styled-components"
import { LayoutStyled, marginBorderMotion } from "./Layout.styled"
// Theme
import { theme } from "../../theme"

export interface LayoutProps {
  children?: ReactElement
}

const Layout = (props: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyled>
        <motion.div className="margin-border" {...marginBorderMotion} />
        <main className="main-page">{props.children}</main>
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout
