import { DefaultTheme } from "styled-components"

export type paletteTypes = "ligth" | "dark"

export const theme: DefaultTheme = {
  margin: {
    vertical: "1em",
    horizontal: "2em",
  },
  colors: {
    ligth: "#BFD8D9",
    dark: "#000000"
  },
  sizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const media = theme.sizes
