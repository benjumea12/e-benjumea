// Styled components
import styled from "styled-components"
// Theme
import { media } from "../theme"
import { MotionProps } from "framer-motion"

export const Main = styled.div`
  width: 80%;
  margin-right: 5%;
  padding-top: 2em;
  @media (max-width: ${media.md}) {
    width: 90%;
    margin-right: 5%;
  }
  .content-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${media.md}) {
      flex-direction: column-reverse;
    }

    .info-section {
      width: 45%;
      h5 {
        font-size: clamp(0.8rem, 1.3vw, 1.5rem);
        margin-bottom: 0.5rem;
        a {
          color: ${(props) => props.theme.colors.dark};
        }
      }
      h1 {
        font-size: clamp(1.5rem, 3vw, 3rem);
        margin-bottom: 0.5rem;
      }
      p {
        font-size: clamp(0.85rem, 1.1vw, 1.2rem);
      }
      .caracteristics {
        display: flex;
        margin: 2em 0;
        .technologies,
        .links {
          width: 45%;
        }
        h4 {
          margin-bottom: 0.8rem;
          font-size: clamp(0.8rem, 1.8vw, 3rem);
        }
        ul {
          padding-left: 1rem;
          li,
          a,
          h6 {
            font-weight: 500;
            font-size: clamp(0.8rem, 1vw, 3rem);
            font-family: "Lato", sans-serif;
            color: ${(props) => props.theme.colors.dark};
          }
        }
      }
      @media (max-width: ${media.md}) {
        width: 100%;
        margin-top: 1em;
      }
    }
    .image {
      width: 50%;
      @media (max-width: ${media.md}) {
        width: 100%;
      }
    }
  }

  h3 {
    font-size: clamp(1.3rem, 2vw, 2.5rem);
    margin-top: 2rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
    margin-top: 1em;
    .image-item {
      width: 29%;
      @media (max-width: ${media.md}) {
        width: 100%;
      }
    }
  }
`

export const Modal = styled.div`
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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${media.lg}) {
        width: 85%;
        height: 85%;
      }

      .image {
        max-width: 80vw;
        max-height: 80vh;
        border: 2px solid ${(props) => props.theme.colors.dark};
      }

      .close {
        position: absolute;
        top: -2.5rem;
        right: -2.5rem;

        cursor: pointer;
        font-size: 3rem;
        color: #ffffff;
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

export const modalOverlayMotion: MotionProps = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  animate: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  transition: { duration: 0.3 },
}

export const containerMotion: MotionProps = {
  variants: {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 3,
        staggerChildren: 0.2,
      },
    },
  },
}

export const itemLiMotion: MotionProps = {
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
}
