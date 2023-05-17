// Styled components
import styled from "styled-components"
// Theme
import { media } from "../theme"

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 8em);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .section-title,
  .section-text {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .section-title {
    text-align: right;
    h1 {
      font-size: clamp(2.1rem, 3.8vw, 4rem);
    }
  }

  .section-text {
    justify-content: flex-end;
    padding-right: 2%;
    h2 {
      margin-bottom: 0.6rem;
      font-size: clamp(1.4rem, 2vw, 4.2rem);
    }
    p {
      font-size: 1rem;
      font-size: clamp(0.8rem, 1.15vw, 1.5rem);
      margin-bottom: 0.5rem;
    }

    a {
      color: ${(props) => props.theme.colors.dark};
      margin: 0.8rem 0 0 0;
      font-size: clamp(1.1rem, 1.7vw, 4rem);
    }
    .redes {
      display: flex;
      align-items: center;
      a {
        margin-right: 0.8rem;
        .icon-item {
          font-size: clamp(2rem, 2.8vw, 3rem);
        }
      }
    }
  }

  .section-grafic {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
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
    justify-content: space-between;
    height: calc(100vh - 6em);

    .section-title,
    .section-text {
      width: 100%;
      height: auto;
      padding-right: 0%;
    }
    .section-grafic {
      height: 40vh;
      width: 70%;
    }

    .section-text {
      p {
        &:nth-child(3) {
          width: 85%;
        }
      }
    }
  }
`
