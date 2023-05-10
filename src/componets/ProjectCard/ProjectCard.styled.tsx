// Styled components
import styled from "styled-components"
// Theme
import { media } from "../../theme"

export const Main = styled.div`
  width: 100%;
  margin-bottom: 5em;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    border: 2px solid ${(props) => props.theme.colors.dark};
    margin-bottom: -8px;
    position: relative;
    z-index: 1;
  }

  .border {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    border: 2px solid ${(props) => props.theme.colors.dark};
  }

  .border-1 {
    top: 8%;
    left: 3%;
    transition: all 200ms 50ms ease-in-out;
  }
  .border-2 {
    top: 16%;
    left: 6%;
    transition: all 200ms 100ms ease-in-out;
  }
  .border-3 {
    top: 24%;
    left: 9%;
    transition: all 200ms 150ms ease-in-out;
  }

  .card-content {
    position: absolute;
    bottom: -5px;
    width: 80%;
    z-index: 2;
    height: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffdb;
    border: 2px solid ${(props) => props.theme.colors.dark};
    transition: all 200ms 0ms ease-in-out;
    padding: 0 10%;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      text-decoration: underline;
      text-align: center;
    }
  }

  &:hover {
    .border {
      top: 0em;
      left: 0em;
    }
    .card-content {
      height: 102%;
    }
  }

  @media (max-width: ${media.lg}) {
    margin-bottom: 3em;

    .card-content {
      h2 {
        font-size: 2.2rem;
        margin-bottom: 10px;
      }
    }
  }
`
