import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { RootState } from "../../store";

interface Props extends RouteProps {
  component: any;
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  const me = useSelector((state: RootState) => state.auth.me);
  return (
    <Route
      {...rest}
      render={(props) =>
        me ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
