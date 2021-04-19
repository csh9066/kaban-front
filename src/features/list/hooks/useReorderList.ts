import { api } from "./../../../lib/api";
import { DraggableLocation } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { reorder } from "../../../lib/reorder";
import { selectAllLists, setLists } from "../listSlice";
import { IList } from "../types";

export default function useReorderList() {
  const lists = useSelector(selectAllLists);
  const dispatch = useDispatch();

  const reorderList = async (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const reorderedLists = reorder(lists, source.index, destination.index);
    const result = dispatch(setLists(reorderedLists)).payload as IList[];
    try {
      await api.post(
        "lists/reorder",
        result.map((list) => list.id)
      );
    } catch (e) {
      dispatch(setLists(lists));
    }
  };

  return reorderList;
}
