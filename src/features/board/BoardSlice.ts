import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "./types";

interface InitialState {
  boards: IBoard[];
  detail: IBoard | null;
}

const initialState: InitialState = {
  boards: [],
  detail: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setDetailBoard(state, { payload }: PayloadAction<IBoard>) {
      state.detail = payload;
    },
    setBoards(state, { payload }: PayloadAction<IBoard[]>) {
      state.boards = payload;
    },
    addBoard(state, { payload }: PayloadAction<IBoard>) {
      state.boards.push(payload);
    },
  },
});

export const { addBoard, setBoards, setDetailBoard } = boardSlice.actions;

export default boardSlice.reducer;
