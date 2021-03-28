import { Route, Switch } from "react-router-dom";
import Board from "./pages/Board";
import BoardList from "./pages/BoardList";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={BoardList} />
        <Route path="/b/:id" component={Board} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
