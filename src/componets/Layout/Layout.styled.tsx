// Styled components
import styled from "styled-components"
import { MotionProps } from "framer-motion"

export const LayoutStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.ligth};

  .margin-border {
    border: 2px solid ${(props) => props.theme.colors.dark};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .main-page {
    position: relative;
    z-index: 2;
    padding: 2.5em;
    min-height: calc(100vh - 5em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const marginBorderMotion: MotionProps = {
  initial: {
    height: "100%",
    width: "100%",
  },
  animate: {
    height: "calc(100% - 3em)",
    width: "calc(100% - 3em)",
  },
  transition: {
    delay: 0.5,
    duration: 0.2,
    ease: "easeOut",
  },
}
