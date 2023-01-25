// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  position: absolute;
  width: 60%;
  opacity: .8;

  .svg-castle {
    width: 100%;
  }

  @media (max-width: ${media.lg}) {
    width: 95%;
  }
`
