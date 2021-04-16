import { FetchListResponse } from "./../board/types";
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICard } from "./types";

const cardAdapter = createEntityAdapter<ICard>({
  selectId: (card) => card.id,
});

export const cardSlice = createSlice({
  name: "card",
  initialState: cardAdapter.getInitialState(),
  reducers: {
    addCard: cardAdapter.addOne,
    removeCardById: cardAdapter.removeOne,
    setCardsByLists(
      state,
      { payload: lists }: PayloadAction<FetchListResponse[]>
    ) {
      const cards = lists.flatMap((list) => list.cards);
      cardAdapter.setAll(state, cards);
    },
  },
});

export const { selectById: selectCardById } = cardAdapter.getSelectors(
  (state: RootState) => state.card
);

export const { addCard, setCardsByLists, removeCardById } = cardSlice.actions;

export default cardSlice.reducer;
