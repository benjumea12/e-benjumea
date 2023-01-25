// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div<{ inverted?: boolean }>`
  position: absolute;
  cursor: pointer;
  transform: ${(props) =>
    props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
  ${(props) => (props.inverted ? `top: 150px` : `bottom: 150px`)};

  left: 10px;

  h4 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  @media (max-width: ${media.lg}) {
    transform: ${(props) =>
      props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
    ${(props) => (props.inverted ? `top: 100px; left: 20px;` : `bottom: 90px; left: auto; right: 10px;`)}

    h4 {
      font-size: 14px !important;
      margin-bottom: 3px;
    }
  }
`
