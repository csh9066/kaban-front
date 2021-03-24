import { ICard } from "../../../types/board";
import { createEntityAdapter, createSlice, Dispatch } from "@reduxjs/toolkit";
import { IList } from "../../../types/board";
import { addCardToList, selectListById } from "../list/listSlice";
import { RootState } from "../../store";

const cardAdapter = createEntityAdapter<ICard>({
  selectId: (card) => card.id,
});

export const cardSlice = createSlice({
  name: "card",
  initialState: cardAdapter.getInitialState(),
  reducers: {
    addCard: cardAdapter.addOne,
  },
});

export const { selectById: selectCardById } = cardAdapter.getSelectors(
  (state: RootState) => state.card
);

export const { addCard } = cardSlice.actions;

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
