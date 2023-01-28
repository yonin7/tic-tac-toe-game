import Board from "./Components/Board";
import { AppContainer, Header, Title } from "./AppStyles";


function App() {
  return (
    <AppContainer >
      <Header><Title>TIC-TAC-TOE</Title></Header>
      <Board  />
    </AppContainer>
  );
}

export default App;
