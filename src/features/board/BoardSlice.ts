import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";
import palette from "../../lib/palette";

const initialState: { boards: IBoard[] } = {
  boards: [
    {
      id: 1,
      title: "안녕하세요",
      background: palette.blue,
    },
    {
      id: 2,
      title: "김치 좋아하세요?",
      background: palette.orange,
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export default boardSlice.reducer;
