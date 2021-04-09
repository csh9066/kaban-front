import { api } from "./../../../lib/api";
import { useEffect, useState } from "react";
import { IBoard } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setBoards } from "../BoardSlice";

export default function useFetchBoards() {
  const [loading, setLoading] = useState(false);
  const boards = useSelector((state: RootState) => state.board.boards);
  const dispatch = useDispatch();

  const fetchBoards = async () => {
    try {
      setLoading(true);
      const res = await api.get<IBoard[]>("boards");
      dispatch(setBoards(res.data));
    } catch (e) {
      console.log("errror");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return {
    loading,
    boards,
  };
}
