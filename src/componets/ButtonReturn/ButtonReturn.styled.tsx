// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div<{ inverted?: boolean }>`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  transform: ${(props) =>
    props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
  ${(props) => (props.inverted ? `top: 150px` : `bottom: 150px`)};

  left: 10px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  @media (max-width: ${media.lg}) {
    transform: ${(props) =>
      props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
    ${(props) =>
      props.inverted
        ? `top: 80px; left: -8px;`
        : `bottom: 80px; left: auto; right: -13px;`}

    h4 {
      font-size: 0.9rem !important;
      margin-bottom: 3px;
    }
  }
`
