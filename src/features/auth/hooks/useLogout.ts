import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { initializeAuth } from "../AuthSlice";

export default function useLogout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch(initializeAuth());
    history.push("/login");
  };
  return logout;
}
