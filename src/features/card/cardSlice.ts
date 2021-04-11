import { FetchListResponse } from "./../board/types";
import {
  createEntityAdapter,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { addCardToList, selectListById } from "../list/ListSlice";
import { RootState } from "../../store";
import { ICard } from "./types";
import { IList } from "../list/types";

const cardAdapter = createEntityAdapter<ICard>({
  selectId: (card) => card.id,
});

export const cardSlice = createSlice({
  name: "card",
  initialState: cardAdapter.getInitialState(),
  reducers: {
    addCard: cardAdapter.addOne,
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

export const { addCard, setCardsByLists } = cardSlice.actions;

export const createCard = ({
  listId,
  card,
}: {
  listId: string;
  card: ICard;
}) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState();
  const list = selectListById(state, listId) as IList;
  dispatch(addCardToList({ listId: list.id, cardId: card.id }));

  dispatch(addCard(card));
};

export default cardSlice.reducer;
