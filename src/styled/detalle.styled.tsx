// Styled components
import styled from "styled-components"
// Theme
import { media } from "../theme"

export const Main = styled.div`
  position: fixed;
  z-index: 1;
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
    display: none;
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
        font-size: 1.2rem;
        overflow: hidden;
        a {
          color: ${(props) => props.theme.colors.dark};
        }
      }

      h1 {
        font-size: 2.8rem;
        margin: 1rem 0;
        overflow: hidden;
      }

      p {
        overflow: hidden;
        font-size: 1rem;
      }

      .extra-info {
        display: flex;
        justify-content: space-between;
        margin-top: 2em;
        overflow: hidden;
        h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        a,
        h6 {
          font-weight: 500;
          font-size: 1.2rem;
          margin-bottom: 0.1rem;
          font-family: "Lato", sans-serif;
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
    font-size: 3rem;
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
    z-index: 50;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-image {
      width: 75%;
      height: 90%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${media.lg}) {
        width: 85%;
        height: 85%;
      }

      .image {
        max-width: 100%;
        max-height: 100%;
        border: 2px solid ${(props) => props.theme.colors.dark};
      }

      .close {
        position: absolute;
        top: 0;
        right: 0;

        cursor: pointer;
        font-size: 2rem;
        color: #ffffff;
      }
    }
  }

  @media (max-width: ${media.lg}) {
    width: calc(100% - 4em);
    margin-left: 1em;
    //padding: 6em 3em 6em 4em;
    .content-top {
      flex-direction: column;
      .text {
        width: 100%;
        text-align: right;
        .extra-info {
          text-align: left;
          h4 {
            margin-bottom: 1rem;
          }
          a,
          h6 {
            font-size: 0.9rem;
          }
        }
        h1,
        h5 {
          width: 80%;
          margin-left: 20%;
        }

        h1 {
          font-size: 2rem;
        }
        h5 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
      .image {
        width: 90%;
        margin-top: 2em;
      }
    }

    .gallery-title {
      font-size: 2rem;
      margin: 1em 0 1em 0;
    }

    .gallery {
      width: 95%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .image-item {
        width: 45%;
        margin-right: 5%;
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
  @media (max-width: ${media.lg}) {
    margin-bottom: 2em;
  }
`
