import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "./types";

const initialState: { boards: IBoard[] } = {
  boards: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard(state, { payload }: PayloadAction<IBoard>) {
      state.boards.push(payload);
    },
    setBoards(state, { payload }: PayloadAction<IBoard[]>) {
      state.boards = payload;
    },
  },
});

export const { addBoard, setBoards } = boardSlice.actions;

export default boardSlice.reducer;
