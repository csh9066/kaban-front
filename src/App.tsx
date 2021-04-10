import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/auth/PrivateRoute";
import Board from "./features/board/Board";
import BoardList from "./features/board/BoardList";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import useCheckAuthEffect from "./features/auth/hooks/useCheckAuthEffect";

function App() {
  const { isLoad } = useCheckAuthEffect();

  if (!isLoad) {
    return null;
  }

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
