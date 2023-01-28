import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #282c34;
  text-align: center;
  user-select: none;

  @media (max-width: 740px) {
    height: 100%;
  }
`;
export const Header = styled.header`
  width: 100%;
  height: 10vh;

  @media (max-width: 740px) {
    margin-bottom: 100px;
  }
`;
export const Title = styled.h1`
  color: #ff9800;
  font-family: "Luckiest Guy";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
`;

