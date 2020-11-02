import StartPage from "./pages/StartPages"
import GamePage from "./pages/GamePage"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
return (
  <>
  <BrowserRouter>
  <Switch>
    <Route exact path="/tic-tac-toe">
      <StartPage/>
    </Route>
    <Route  path="/tic-tac-toe/tic-tac-toe/Game">
      <GamePage />
    </Route>
  </Switch>
  </BrowserRouter>

  </>
)
}

export default App;
