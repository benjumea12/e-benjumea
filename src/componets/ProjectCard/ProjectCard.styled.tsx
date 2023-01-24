// Styled components
import styled from "styled-components"

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
    top: 1em;
    left: 1em;
    transition: all 200ms 50ms ease-in-out;
  }
  .border-2 {
    top: 2em;
    left: 2em;
    transition: all 200ms 100ms ease-in-out;
  }
  .border-3 {
    top: 3em;
    left: 3em;
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
    background-color: #FFFFDB;
    border: 2px solid ${(props) => props.theme.colors.dark};
    transition: all 200ms 0ms ease-in-out;
    padding: 0 10%;

    h2 {
      font-size: 35px;
      margin-bottom: 20px;
      text-decoration: underline;
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
`
