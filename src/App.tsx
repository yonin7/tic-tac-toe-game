import { useState } from 'react'

import Board from "./Components/Board";
import Modal from "./Components/Modal";
import StartGame from "./Components/StartGame";
import { AppContainer, Header, Title } from "./AppStyles";


function App() {
  const [boardSize, setBoardSize] = useState<number|null>(null);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [winnerName, setWinnerName] = useState<string|null>(null);

  const resultHandler=(anyUserWin:boolean,winnerUser:string|null,newBoardSize:number|null)=>{
    setIsWinner(anyUserWin)
    setWinnerName(winnerUser)
    setBoardSize(newBoardSize)
  }
  
  const restartHandler=(size:number|null)=>{
    setIsWinner(false)
    setBoardSize(size)
  }
  return (
    <AppContainer >
      <Header><Title>TIC-TAC-TOE</Title></Header>
      {!boardSize&&!isWinner&& <StartGame restartHandler={restartHandler} /> }
      {!isWinner&&boardSize&&<Board boardSize={boardSize} resultHandler={resultHandler}/>}
      {isWinner&&<Modal winnerName={winnerName} restartHandler={restartHandler} ></Modal>}
    </AppContainer>
  );
}

export default App;
