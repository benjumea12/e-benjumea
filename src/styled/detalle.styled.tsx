// Styled components
import styled from "styled-components"

export const Main = styled.div`
  position: fixed;
  width: calc(100% - 18em);
  margin-left: 8em;
  height: calc(100% - 12em);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 6em 0;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 0px;
  }

  .content-top {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    .text {
      width: 40%;
      h5 {
        font-size: 16px;
        a {
          color: ${(props) => props.theme.colors.dark};
        }
      }

      h1 {
        font-size: 38px;
        margin: 18px 0;
      }

      .extra-info {
        display: flex;
        justify-content: space-between;
        margin-top: 2em;
        h4 {
          font-size: 22px;
          margin-bottom: 10px;
        }
        a,
        h6 {
          font-weight: 600;
          font-size: 16px;
          color: ${(props) => props.theme.colors.dark};
        }
      }
    }
    .image {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }

  .gallery-title {
    font-size: 30px;
    margin: 2em 0 1em 0;
  }

  .gallery {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .image-item {
      width: 22%;
      margin-right: 3%;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-image {
      width: 80%;
      position: relative;

      .image {
        width: 100%;
        border: 2px solid ${(props) => props.theme.colors.dark};
      }

      .close {
        position: absolute;
        top: -30px;
        right: -30px;
        
        cursor: pointer;
        font-size: 28px;
        color: #FFFFFF;
      }
    }
  }
`

export const Image = styled.div`
  width: 100%;
  margin-bottom: 3em;
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
    top: 5%;
    left: 3%;
    transition: all 200ms 50ms ease-in-out;
  }
  .border-2 {
    top: 10%;
    left: 6%;
    transition: all 200ms 100ms ease-in-out;
  }
  .border-3 {
    top: 15%;
    left: 9%;
    transition: all 200ms 150ms ease-out;
  }

  &:hover {
    .border {
      top: 0em;
      left: 0em;
    }
  }
`
