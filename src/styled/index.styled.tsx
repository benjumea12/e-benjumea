// Styled components
import styled from "styled-components"

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
`
