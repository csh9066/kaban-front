import { FetchBoardResponse } from "../types";
import { api } from "../../../lib/api";
import { useEffect, useState } from "react";
import { batch, useDispatch } from "react-redux";
import { setDetailBoard } from "../BoardSlice";
import { setCardsByLists } from "../../card/CardSlice";
import { setLists } from "../../list/ListSlice";
import { AxiosError } from "axios";

function useFetchDetailBoard(id: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const distpach = useDispatch();

  const fetchBoard = async () => {
    try {
      setLoading(true);
      const res = await api.get<FetchBoardResponse>(`boards/${id}`);
      const { lists, ...board } = res.data;
      batch(() => {
        distpach(setDetailBoard(board));
        distpach(setLists(lists));
        distpach(setCardsByLists(lists));
      });
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoard();
    //eslint-disable-next-line
  }, []);

  return {
    loading,
    error,
  };
}

export default useFetchDetailBoard;
