import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";

export interface CardState {
  id: string;
  title: string;
  listId: string;
  order: number;
}

const cardAdapter = createEntityAdapter<CardState>({
  selectId: (card) => card.id,
});

export const cardSlice = createSlice({
  name: "card",
  initialState: cardAdapter.getInitialState(),
  reducers: {
    addCards: cardAdapter.addMany,
    addCard: cardAdapter.addOne,
  },
});

export const { selectAll: selectAllCards } = cardAdapter.getSelectors(
  (state: RootState) => state.card
);

export const selectCardsByListId = createSelector(
  [selectAllCards, (_: RootState, listId: string) => listId],
  (cards, listId) =>
    cards
      .filter((card) => card.listId === listId)
      .sort((a, b) => a.order - b.order)
);

export const { addCards, addCard } = cardSlice.actions;

export default cardSlice.reducer;
