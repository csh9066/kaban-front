export interface ICard {
  id: string;
  title: string;
}

export interface CreateCardData {
  id: string;
  title: string;
  order: number;
  listId: string;
}
