// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"
import { MotionProps } from "framer-motion"

export const Main = styled.div`
  width: 50%;
  position: fixed;
  right: -2em;
  opacity: 0.4;
  .svg-pricess {
    width: 100%;
  }

  @media (max-width: ${media.lg}) {
    width: 100%;
    bottom: 15vh;
  }
`
