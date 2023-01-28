import Board from "./Components/Board";
import { AppContainer, Header, Title } from "./AppStyles";


function App() {
  return (
    <AppContainer >
      <Header><Title>TIC-TAC-TOE</Title></Header>
      <Board  boardSize={3}/>
    </AppContainer>
  );
}

export default App;
