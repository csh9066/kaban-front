import { api } from "./../../../lib/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { v4 as uuidv4 } from "uuid";
import { IList } from "../types";
import { addList, removeListById } from "../listSlice";

export default function useCreateList() {
  const boardId = useSelector((state: RootState) => state.board.detail?.id);
  const order = useSelector((state: RootState) => state.list.ids).length + 1;
  const dispatch = useDispatch();
  const createList = async (title: string) => {
    const list = {
      id: uuidv4(),
      title,
      order,
    };
    dispatch(
      addList({
        ...list,
        cards: [],
      })
    );
    try {
      await api.post<IList>(`lists`, {
        ...list,
        boardId: boardId + "",
      });
    } catch (e) {
      dispatch(removeListById(list.id));
    }
  };

  return createList;
}
