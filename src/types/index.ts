export interface IBoard {
  id: number;
  title: string;
  background: string;
}

export interface IList {
  id: string;
  title: string;
  cards: string[];
}

export interface ICard {
  id: string;
  title: string;
}
