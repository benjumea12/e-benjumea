// Styled components
import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  .section-title {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 5em;
    font-size: 25px;
    text-align: right;
    h1 {
      overflow: hidden;
      text-align: center;
    }
  }

  .section-projects {
    top: 0;
    max-height: 100%;
    padding: 6em 10em 5em 10em;
    width: 100%;
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
    }
  }
`
