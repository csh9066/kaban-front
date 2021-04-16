import { useDispatch, useSelector } from "react-redux";
import { api } from "../../../lib/api";
import { RootState } from "../../../store";
import {
  addCardInList,
  removeCardInList,
  selectListById,
} from "../../list/listSlice";
import { v4 as uuidv4 } from "uuid";
import { addCard, removeCardById } from "../cardSlice";

export default function useCreateCard(listId: string) {
  const dispatch = useDispatch();
  const order =
    (useSelector((state: RootState) => selectListById(state, listId))?.cards
      .length as number) + 1;

  const createCard = async (title: string) => {
    const card = {
      id: uuidv4(),
      title,
    };
    dispatch(addCard(card));
    dispatch(addCardInList({ listId, cardId: card.id }));

    try {
      await api.post("cards", { ...card, order, listId });
    } catch (e) {
      dispatch(removeCardById(card.id));
      dispatch(removeCardInList({ listId, cardId: card.id }));
    }
  };

  return createCard;
}
