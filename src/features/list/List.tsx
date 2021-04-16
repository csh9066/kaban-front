import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ListTitle from "./ListTitle";
import { useSelector } from "react-redux";
import AddCard from "../card/AddCard";
import { selectCardById } from "../card/cardSlice";
import Card from "../card/Card";
import { RootState } from "../../store";
import { IList } from "./types";
import { ICard } from "../card/types";

interface Props {
  index: number;
  list: IList;
}

function List({ index, list }: Props) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container ref={innerRef} {...draggableProps}>
          <div className="wrapper">
            <ListTitle
              title={list.title}
              dragHandleProps={dragHandleProps}
              listId={list.id}
            />
            <Droppable droppableId={list.id} type="card">
              {({ innerRef, droppableProps, placeholder }) => (
                <div
                  ref={innerRef}
                  {...droppableProps}
                  style={{ paddingBottom: 10 }}
                >
                  {list.cards.map((id, index) => {
                    return <RenderCard id={id} index={index} key={id} />;
                  })}
                  {placeholder}
                </div>
              )}
            </Droppable>
            <AddCard listId={list.id} />
          </div>
        </Container>
      )}
    </Draggable>
  );
}

const RenderCard = React.memo(
  ({ id, index }: { id: string; index: number }) => {
    const card = useSelector((state: RootState) =>
      selectCardById(state, id)
    ) as ICard;

    return <Card card={card} index={index} />;
  }
);

const Container = styled.div`
  min-width: 272px;
  width: 272px;
  user-select: none;

  .wrapper {
    background-color: ${palette.gray};
    border-radius: 4px;
  }

  margin-left: 8px;
`;

export default React.memo(List);
