// Styled components
import styled from "styled-components"

export const Main = styled.div<{ inverted?: boolean }>`
  position: absolute;
  cursor: pointer;
  transform: ${props => props.inverted ? `rotate(-90deg)` : `rotate(90deg)`};
  ${props => props.inverted ? `top: 150px` : `bottom: 150px` };

  left: 10px;

  h4 {
    font-size: 25px;
    margin-bottom: 10px;
  }
`
