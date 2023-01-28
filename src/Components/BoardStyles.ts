import styled from "styled-components";

type gridProps = {
    size: number;
};
type squareProps = {
    backgroundImg: string|null;
    hoverBackgroundImg: string|null;
    key:string
    id:string
    onClick:any
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  user-select: none;
`;

export const Grid = styled.div<gridProps>`
  display: grid;
  grid-template-columns: ${(props) => ` repeat(${props.size}, 1fr)`};
  grid-template-rows: ${(props) => ` repeat(${props.size}, 1fr)`};
  border: 1px solid yellow;
  width: 500px;
  height: 500px;

  @media (max-width: 740px) {
    width: 325px;
    height: 325px;
  }
  @media (max-width: 300px) {
    width: 250px;
    height: 250px;
  }
`;
export const Square = styled.div<squareProps>`
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  border: 1px solid yellow;
  :hover {
    filter: ${(props) =>
      `${props.hoverBackgroundImg ? "grayscale(100%)" : "grayscale(0)"}`};
    background-image: ${(props) =>
      props.hoverBackgroundImg && `url( ${props.hoverBackgroundImg})`};
  }
`;