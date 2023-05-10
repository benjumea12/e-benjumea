// Styled components
import styled from "styled-components"
// Theme
import { media } from "../theme"

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 85%;

  .section-title,
  .section-text {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .name {
      overflow: hidden;
    }
  }

  .section-title {
    text-align: right;
    font-size: 1.6rem;
  }

  .section-text {
    justify-content: flex-end;
    h2 {
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
      overflow: hidden;
    }
    p {
      overflow: hidden;
      font-size: 1rem;
    }
    a {
      color: ${(props) => props.theme.colors.dark};
      margin: 0.8rem 0;
      font-size: 1.4rem;
      overflow: hidden;
    }
    .redes {
      display: flex;
      align-items: center;
      overflow: hidden;
      a {
        margin-right: 1rem;
        .icon-item {
          font-size: 2.5rem;
        }
      }
    }
  }

  .section-grafic {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: 0;
    .frame {
      border: 2px solid ${(props) => props.theme.colors.dark};
      height: 80%;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }

  @media (max-width: ${media.md}) {
    flex-direction: column;
    align-items: center;
    height: 97%;
    margin-top: 3%;
    .section-title,
    .section-text {
      width: 100%;
      height: auto;
    }

    .section-title {
      h1 {
        font-size: 2rem;
      }
    }

    .section-grafic {
      height: 40vh;
      width: 80%;
    }

    .section-text {
      h2 {
        font-size: 1.2rem;
      }
      p {
        overflow: hidden;
        font-size: 0.8rem;
      }
      a {
        margin: 0.8rem 0;
        font-size: 1rem;
      }
      .redes {
        a {
          .icon-item {
            font-size: 2rem;
          }
        }
      }
    }
  }
`
