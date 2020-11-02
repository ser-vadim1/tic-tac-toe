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
    <Route exact path="/">
      <StartPage/>
    </Route>
    <Route  path="/Game">
      <GamePage />
    </Route>
  </Switch>
  </BrowserRouter>

  </>
)
}

export default App;
