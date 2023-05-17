// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div<{ inverted?: boolean }>`
  position: fixed;
  z-index: 2;
  cursor: pointer;
  left: 0px;

  transform: ${(props) =>
    props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
  ${(props) => (props.inverted ? `top: 8em` : `bottom: 8em`)};

  h4 {
    font-size: clamp(0.5rem, 1.5vw, 4rem);
    margin-bottom: 10px;
  }

  @media (max-width: ${media.md}) {
    transform: ${(props) =>
      props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
    ${(props) =>
      props.inverted
        ? `top: 5em; left: -1em;`
        : `bottom: 5em; left: auto; right: -.5em;`}

    h4 {
      font-size: 0.9rem !important;
      margin-bottom: 3px;
    }
  }
`
