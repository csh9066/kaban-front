import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { DraggableLocation } from "react-beautiful-dnd";
import { reorder } from "../../lib/reorder";
import { RootState } from "../../store";
import { FetchListResponse } from "../board/types";
import { IList } from "./types";

const listAdapter = createEntityAdapter<IList>({
  selectId: (list) => list.id,
});

export const listSlice = createSlice({
  name: "list",
  initialState: listAdapter.getInitialState(),
  reducers: {
    addList: listAdapter.addOne,
    setLists(state, { payload }: PayloadAction<FetchListResponse[]>) {
      const lists = payload.map((list) => ({
        ...list,
        cards: list.cards.map((card) => card.id),
      }));
      listAdapter.setAll(state, lists);
    },
    addCardToList(
      state,
      { payload }: PayloadAction<{ listId: string; cardId: string }>
    ) {
      state.entities[payload.listId]?.cards.push(payload.cardId);
    },
    reorderCardinList(
      state,
      {
        payload,
      }: PayloadAction<{
        source: DraggableLocation;
        destination: DraggableLocation;
      }>
    ) {
      const { source, destination } = payload;
      if (source.droppableId === destination.droppableId) {
        const list = state.entities[source.droppableId] as IList;
        reorder(list.cards, source.index, destination.index);
        return;
      }
      const sourceList = state.entities[source.droppableId] as IList;
      const destinationList = state.entities[destination.droppableId] as IList;
      const [card] = sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, card);
    },
    reorderList(
      state,
      {
        payload,
      }: PayloadAction<{
        source: DraggableLocation;
        destination: DraggableLocation;
      }>
    ) {
      const { source, destination } = payload;
      const lists = state.ids.map((id) => state.entities[id]) as IList[];
      listAdapter.setAll(
        state,
        reorder(lists, source.index, destination.index)
      );
    },
    updateList: listAdapter.updateOne,
  },
});

export const {
  selectAll: selectAllLists,
  selectById: selectListById,
  selectIds: selectListIds,
} = listAdapter.getSelectors((state: RootState) => state.list);

export const {
  addList,
  updateList,
  reorderList,
  reorderCardinList,
  addCardToList,
  setLists,
} = listSlice.actions;

export default listSlice.reducer;
