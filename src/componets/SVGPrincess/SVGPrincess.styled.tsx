// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  width: 50%;
  position: absolute;
  opacity: .8;
  right: -2em;
  .svg-pricess {
    width: 100%;
  }
  @media (max-width: ${media.lg}) {
    width: 100%;
    opacity: .5;
    bottom: 15vh;
  }
`
