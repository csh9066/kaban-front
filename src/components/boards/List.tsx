import styled from "styled-components";
import pallete from "../../lib/palette";
import Card from "./Card";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ListTitle from "./ListTitle";
import { useSelector } from "react-redux";
import { selectCardsByListId } from "../../store/cardSlice";
import { RootState } from "../../store";
import AddCard from "./AddCard";

interface Props {
  id: string;
  index: number;
  title: string;
}

export default function List({ id, title, index }: Props) {
  const cards = useSelector((state: RootState) =>
    selectCardsByListId(state, id)
  );

  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <StyeldList ref={innerRef} {...draggableProps}>
          <div className="container">
            <ListTitle title={title} dragHandleProps={dragHandleProps} />
            <Droppable droppableId={id}>
              {({ innerRef, droppableProps, placeholder }) => (
                <div ref={innerRef} {...droppableProps}>
                  {cards.map(({ id, title }, index) => (
                    <Card id={id} index={index} key={id} title={title} />
                  ))}
                  {placeholder}
                </div>
              )}
            </Droppable>
            <AddCard listId={id} />
          </div>
        </StyeldList>
      )}
    </Draggable>
  );
}

const StyeldList = styled.div`
  min-width: 272px;
  width: 272px;
  user-select: none;

  .container {
    background-color: ${pallete.gray};
    border-radius: 4px;
  }

  & + & {
    margin-left: 8px;
  }
`;
