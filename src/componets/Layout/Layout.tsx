import React, { useState, useEffect } from "react"
import "./style.css"
// Framer motion
import { motion } from "framer-motion"
// Styled components
import { ThemeProvider } from "styled-components"
import { Main } from "./Layout.styled"
// Theme
import { theme } from "../../theme"

export interface LayoutProps {
  animate?: boolean
  children: any
}

const Layout = (props: LayoutProps) => {
  const { animate } = props
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <motion.div
          className="margin-border"
          initial={
            animate
              ? {
                  height: "100%",
                  width: "100%",
                }
              : {
                  height: "calc(100% - 3em)",
                  width: "calc(100% - 3em)",
                }
          }
          animate={{
            height: "calc(100% - 3em)",
            width: "calc(100% - 3em)",
          }}
          transition={{
            delay: 1,
            duration: 0.3,
          }}
        >
          {props.children}
        </motion.div>
      </Main>
    </ThemeProvider>
  )
}

export default Layout
