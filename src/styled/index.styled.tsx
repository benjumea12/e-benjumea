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
    font-size: 30px;
  }

  .section-text {
    justify-content: flex-end;
    h2 {
      margin-bottom: 10px;
      font-size: 25px;
      overflow: hidden;
    }
    p {
      overflow: hidden;
    }
    a {
      color: ${(props) => props.theme.colors.dark};
      margin: 20px 0 10px 0;
      font-size: 20px;
      overflow: hidden;
    }
    .redes {
      display: flex;
      align-items: center;
      overflow: hidden;
      a {
        margin-right: 10px;
        .icon-item {
          font-size: 42px;
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

  @media (max-width: ${media.lg}) {
    flex-direction: column;
    align-items: center;
    height: 90%;
    .section-title,
    .section-text {
      width: 100%;
      height: auto;
    }

    .section-title {
      h1 {
        font-size: 35px;
      }
    }

    .section-grafic {
      height: 40vh;
      width: 80%;
    }

    .section-text {
      h2 {
        margin-bottom: 8px;
        font-size: 18px;
      }
      p {
        overflow: hidden;
        font-size: 13px;
      }
      a {
        margin: 15px 0 8px 0;
        font-size: 16px;
      }
      .redes {
        a {
          .icon-item {
            font-size: 32px;
          }
        }
      }
    }
  }
`
