import React, { useState, useEffect } from "react"
import "./style.css"
// Styled components
import { ThemeProvider } from "styled-components"
import { Main } from "./Layout.styled"
// Theme
import { theme } from "../../theme"

export interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <div className="margin-border">{props.children}</div>
      </Main>
    </ThemeProvider>
  )
}

export default Layout
