import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { RootState } from "../../store";

interface Props extends RouteProps {
  component: any;
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
