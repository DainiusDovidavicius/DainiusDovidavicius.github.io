import { Route, Switch } from "react-router-dom";
import Aboutuspage from "./pages/Aboutuspage";
import Contactspage from "./pages/Contactspage";
import Game from "./pages/Game";
import Greetings from "./pages/Greetings";
import Newspage from "./pages/Newspage";
import Welcomepage from "./pages/Welcomepage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcomepage />
      </Route>
      <Route path="/news">
        <Newspage />
      </Route>
      <Route path="/contacts">
        <Contactspage />
      </Route>
      <Route path="/aboutus">
        <Aboutuspage />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/greetings">
        <Greetings />
      </Route>
    </Switch>
  );
}

export default App;
