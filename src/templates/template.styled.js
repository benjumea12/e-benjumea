import styled, { keyframes } from "styled-components"

const animaReturn = keyframes`
  from { margin-left: -150px }
  to { margin-left: 0px }
`

export const Main = styled.div`
  position: relative;
  padding: 70px 8% 90px 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.primary};

  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    padding: 60px 5% 0px 5%;
  }

  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .return {
      left: 0;
      top: 10;
      margin-left: -150px;
      font-size: 40px;
      position: absolute;
      color: ${(props) => props.theme.secondary};
      animation: ${animaReturn} 0.5s 3s forwards
        cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 50px 0px 0px 0px;

      .img > img {
      }
      .img {
        margin-left: -20px;
        width: 50%;
      }

      .presentation {
        width: 45%;
        color: ${(props) => props.theme.secondary};
      }

      @media (max-width: ${(props) => props.theme.sizes.lg}) {
        flex-direction: column;
        justify-content: center;
        .img {
          width: 95%;
          margin: 0px 0px 30px -30px;
        }
        .presentation {
          width: 100%;
        }
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .text {
      margin: 50px 0px 0px 0px;
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .development {
      width: 57%;
      margin-top: 90px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .text {
        margin: 50px 0px 0px 0px;
      }
    }

    .links {
      width: 40%;
      margin-top: 90px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .text {
        margin-top: 50px;
        padding-left: 30px;

        a {
          display: block;
          color: ${(props) => props.theme.secondary};
          margin-bottom: 5px;
        }
      }
    }

    @media (max-width: ${(props) => props.theme.sizes.lg}) {
      flex-direction: column-reverse;

      .development,
      .links {
        width: 100%;
      }
    }
  }

  .gallery {
    margin-top: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: flex-start;

    .section {
      margin-top: 50px;

      .images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
