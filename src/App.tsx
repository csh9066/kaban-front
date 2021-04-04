import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/auth/PrivateRoute";
import Board from "./pages/Board";
import BoardList from "./pages/BoardList";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" exact component={BoardList} />
        <PrivateRoute path="/b/:id" component={Board} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
