// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;

  .svg-castle {
    width: 55vw;
  }

  @media (max-width: ${media.lg}) {
    .svg-castle {
      width: 100vw;
    }
  }
`
