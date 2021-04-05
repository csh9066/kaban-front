import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { api } from "../../../lib/api";
import { setMe } from "../AuthSlice";
import { LoginData, LoginResult } from "../types";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useCallback(
    async (loginData: LoginData) => {
      setLoading(true);
      try {
        const { data } = await api.post<LoginResult>("auth/login", loginData);
        dispatch(setMe(data.user));
        localStorage.setItem("access_token", data.accessToken);
        alert("로그인 완료");
        history.push("/");
      } catch (e) {
        setError(e.response.data.message);
        setLoading(false);
      }
    },
    [history, dispatch]
  );

  return {
    loading,
    error,
    login,
  };
}
