import StartGame from './StartGame'
import { Container, WinningTitle } from "./ModalStyles";

const Modal:React.FC<{winnerName:string|null,restartHandler:(setBoardSize:number|null)=>void}> = ({winnerName,restartHandler}) => {
  return (
    <Container>
        <WinningTitle>THE WINNER IS: {winnerName?.toUpperCase()}!!!</WinningTitle>
        <WinningTitle>TRY AGIAN:</WinningTitle>
        <StartGame restartHandler={restartHandler}/>
    </Container>
  )
}

export default Modal