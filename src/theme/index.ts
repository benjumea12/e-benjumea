import { DefaultTheme } from "styled-components"
import { MotionProps } from "framer-motion"

export type paletteTypes = "ligth" | "dark"

export const theme: DefaultTheme = {
  margin: {
    vertical: "1em",
    horizontal: "2em",
  },
  colors: {
    ligth: "#BFD8D9",
    dark: "#000000",
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

export const global: MotionProps = {}

export const media = theme.sizes

export const opacityMotion: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.3,
    delay: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
}

export const containerMotion: MotionProps = {
  variants: {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 1.5,
        staggerChildren: 0.2,
      },
    },
  },
}

export const itemLiMotion: MotionProps = {
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
}
