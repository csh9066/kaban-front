import { ICard } from "../card/types";

export interface IBoard {
  id: number;
  title: string;
  background: string;
}

export interface FetchListResponse {
  id: string;
  title: string;
  cards: ICard[];
}

export interface FetchBoardResponse extends IBoard {
  lists: FetchListResponse[];
}
