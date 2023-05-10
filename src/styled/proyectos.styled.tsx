// Styled components
import styled from "styled-components"
// Theme
import { media } from "../theme"

export const Main = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  .section-title {
    position: absolute;
    top: 0;
    right: 5em;
    font-size: 1.8rem;
    text-align: right;
    h1 {
      overflow: hidden;
    }
  }

  .section-projects {
    top: 0;
    position: fixed;
    height: calc(100% - 6em - 5em);
    width: calc(100% - 28em);
    padding: 6em 14em 5em 14em;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0px;
    }

    .item {
      width: 45%;
      list-style: none;
      &:nth-child(2n) {
        transform: translateY(50%) !important;
      }
    }
  }

  @media (max-width: ${media.lg}) {
    height: 90%;
    .section-title {
      right: 20px;
      font-size: 1rem;
      h1 {
        overflow: hidden;
      }
    }

    .section-projects {
      width: calc(100% - 8em);
      height: calc(100% - 13em - 5em);
      padding: 12em 4em 5em 4em !important;
      .item {
        width: 90%;
        list-style: none;
        &:nth-child(2n) {
          transform: translateY(0%) !important;
        }
      }
    }
  }
`
