// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  width: 14rem;
  .svg-arrow {
    width: 100%;
  }

  @media (max-width: ${media.lg}) {
    width: 8rem;
  }
`
