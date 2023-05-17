// Styled components
import styled from "styled-components"
import { MotionProps } from "framer-motion"
// Theme
import { media } from "../theme"

export const Main = styled.div`
  width: 80%;
  margin-right: 3%;
  padding-top: 2em;
  padding-bottom: 15em;

  .title {
    text-align: right;
    width: 100%;
    font-size: clamp(1.8rem, 3.5vw, 3.5rem);
  }

  .section-projects {
    top: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    list-style: none;
    .item {
      width: 45%;
      &:nth-child(2n) {
        transform: translateY(50%) !important;
      }
    }
  }

  @media (max-width: ${media.md}) {
    width: 100%;
    padding-top: 1em;
    padding-bottom: 5em;
    margin-left: 0%;
    .title {
      text-align: center;
    }
    .section-projects {
      margin-top: 1em;
      .item {
        width: 90%;
        margin-top: 1em;
        &:nth-child(2n) {
          transform: translateY(0%) !important;
        }
      }
    }
  }
`
