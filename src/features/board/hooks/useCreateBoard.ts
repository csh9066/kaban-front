import { api } from "./../../../lib/api";
import { useDispatch } from "react-redux";
import { addBoard } from "../BoardSlice";
import { IBoard } from "../types";
import palette from "../../../lib/palette";

export default function useCreateBoard() {
  const dispatch = useDispatch();

  const createBoard = async (title: string) => {
    try {
      const res = await api.post<IBoard>("boards", {
        title,
        // 디폴트 컬러
        background: palette.blue,
      });
      dispatch(addBoard(res.data));
    } catch (e) {}
  };
  return createBoard;
}
