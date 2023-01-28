import styled from "styled-components";

type boardSizeInputProps = {
    onChange:any
};
type buttonProps = {
    onClick:any
};
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:30px;
  width: 100%;
  height: 100%;
`;
export const BoardSizeInput = styled.input.attrs((props) => ({
    type: "number",
  }))<boardSizeInputProps>`
  background-color: #F0F0D0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size:10rem;
  text-align:center;
  width: 200px;
  height: 200px;
`;

export const Button = styled.button<buttonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 50px;
  background-color:#F69302;
  color:white;
  font-size:1.5rem;

`;