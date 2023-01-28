import React, { useEffect, useState } from 'react'

import circleImg from "../Assets/circle.png";
import crossImg from "../Assets/cross.png"

import { Container, Grid,Square } from "./BoardStyles";

const Board:React.FC<{boardSize:number}> = ({boardSize}) => {
  const [boardGrid,setBoardGrid] = useState<(string[]|null[])[]>([])
  const [userTurn, setUserTurn] = useState("cross");
  const [isWinner, setIsWinner] = useState(false);

  useEffect(()=>{
      const boardTemplate =[]
      for(let i =0; i<boardSize;i++){
          let row=[];
          for (let j = 0; j < boardSize; j++) {
              row.push(null)              
          }
          boardTemplate.push(row)
      }
      setBoardGrid(boardTemplate)
  },[boardSize])

  const combinationSquareChecker = (row:number, column:number) => {
    if (boardGrid[row][column] !== userTurn) {
      return false;
    }
    return true;
  };
  const winnerCombinationChecker = (row:number, column:number) => {
    let isRowFull = true;
    let isColumnFull = true;
    let isLtrDiagonalFull = true;
    let isRtlDiagonalFull = true;
    for (let i = 0; i < boardGrid.length; i++) {
      let rowChecking = combinationSquareChecker(row, i);
      let columnChecking = combinationSquareChecker(i, column);
      let ltrDiagonalChecking = combinationSquareChecker(i, i);
      let rtlDiagonalChecking = combinationSquareChecker(i,boardGrid.length - 1 - i);
      if (!rowChecking) isRowFull = false;
      if (!columnChecking) isColumnFull = false;
      if (!ltrDiagonalChecking) isLtrDiagonalFull = false;
      if (!rtlDiagonalChecking) isRtlDiagonalFull = false;
    }
    if (isRowFull || isColumnFull || isLtrDiagonalFull || isRtlDiagonalFull)
      return true;
    return false;
  };


  const clickHandler = (e: any) => {      
    const myArray = e.target.id.split(",");
    let row = parseInt(myArray[0]);
    let column = parseInt(myArray[1]);
    let tempArr:(string[]|null[])[] = [...boardGrid];
    console.log(tempArr);
    
    if (tempArr[row][column]===null) {
      tempArr[row][column] = userTurn;
    }
    // setBoardGrid([tempArr]);

    const checkingWinning = winnerCombinationChecker(row, column);
    if (checkingWinning) {
      setIsWinner(true);
      return;
    }

    if (userTurn === "cross") {
      setUserTurn("circle");
    } else setUserTurn("cross");
  };

  const restartHandler = () => {
    const boardTemplate = [];
    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let i = 0; i < boardSize; i++) {
        row.push(null);
      }
      boardTemplate.push(row);
    }
    setBoardGrid(boardTemplate);
    setUserTurn("cross");
    setIsWinner(false);
  };
  const boardPainter = () => {
    let hoverImg;
    return boardGrid.map((row:any, rowIndex:number) => {
      return row.map((column:any, columnIndex:number) => {
        let selectedTurn = null;
        userTurn === "cross" ? (hoverImg = crossImg) : (hoverImg = circleImg);
        if (column === "circle") selectedTurn = circleImg;
        if (column === "cross") selectedTurn = crossImg;

        return (
          <Square
          key={`${rowIndex},${columnIndex}`}
          id={`${rowIndex},${columnIndex}`}
          backgroundImg={selectedTurn ? selectedTurn : null}
          hoverBackgroundImg={!selectedTurn ? hoverImg : null}
          onClick={!selectedTurn ? (e:any) => clickHandler(e) : null}></Square>
        );
      });
    });
  };
  return (
    <Container>
        <Grid size={boardSize}>{boardPainter()}</Grid>
        <button onClick={restartHandler}>RESTART</button>;

    </Container>
  )
}

export default Board