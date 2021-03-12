import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface List {
  id: string;
  title: string;
  order: number;
}

const listAdapter = createEntityAdapter<List>({
  selectId: (list) => list.id,
  sortComparer: (a, b) => a.order - b.order,
});

export const listSlice = createSlice({
  name: "list",
  initialState: listAdapter.getInitialState(),
  reducers: {
    addList: listAdapter.addOne,
  },
});

export const {
  selectAll: selectAllLists,
  selectById: selectListById,
  selectIds: selectListIds,
} = listAdapter.getSelectors((state: RootState) => state.list);

export const { addList } = listSlice.actions;

export default listSlice.reducer;
