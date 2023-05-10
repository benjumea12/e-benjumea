// Styled components
import styled from "styled-components"

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ligth};
  overflow: hidden;
  position: relative;

  .margin-border {
    border: 2px solid ${(props) => props.theme.colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
