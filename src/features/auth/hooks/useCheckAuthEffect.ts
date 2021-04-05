import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../../lib/api";
import { IUser } from "../../user/types";
import { setMe } from "../AuthSlice";

export default function useCheckAuthEffect() {
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();
  const checkAuth = async () => {
    try {
      const res = await api.get<IUser>("auth/check");
      dispatch(setMe(res.data));
    } catch (e) {
      localStorage.removeItem("acceess_token");
    } finally {
      setIsLoad(true);
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line
  }, []);

  return {
    isLoad,
  };
}
