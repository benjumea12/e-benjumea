// Styled components
import styled from "styled-components"
// Interfaces
import { LayoutProps } from "./Layout"

export const Main = styled.div<LayoutProps>`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ligth};

  .margin-border {
    border: 2px solid ${(props) => props.theme.colors.dark};
    height: calc(100% - 5em);
    width: calc(100% - 5em);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
