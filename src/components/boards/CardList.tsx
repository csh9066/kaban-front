import React from "react";
import styled from "styled-components";
import Input from "../common/Input";
import pallete from "../../lib/palette";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "../common/Button";
import { MdAdd } from "react-icons/md";
import CardItem from "./CardItem";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface Props {
  id: string;
  index: number;
  title: string;
  cards: { id: string; title: string }[];
}

export default function CardList({ id, title, index, cards }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <StyeldCardList ref={innerRef} {...draggableProps}>
          <div className="container">
            <Title {...dragHandleProps}>
              <TitleInput value={title} readOnly />
              <div className="card-list__ trash">
                <BsFillTrashFill />
              </div>
            </Title>
            <Droppable droppableId={id}>
              {({ innerRef, droppableProps, placeholder }) => (
                <CardItems ref={innerRef} {...droppableProps}>
                  {cards.map((card, index) => (
                    <CardItem
                      id={card.id}
                      index={index}
                      key={card.id}
                      title={card.title}
                    />
                  ))}
                  {placeholder}
                </CardItems>
              )}
            </Droppable>
            <div className="card-list__create-btn-wrapper">
              <CreateCardItemButton block icon={<MdAdd />}>
                Add another card
              </CreateCardItemButton>
            </div>
          </div>
        </StyeldCardList>
      )}
    </Draggable>
  );
}

const StyeldCardList = styled.div`
  min-width: 272px;
  width: 272px;
  user-select: none;

  .container {
    background-color: ${pallete.gray};
    border-radius: 4px;
  }

  .card-list__create-btn-wrapper {
    padding: 8px;
  }

  & + & {
    margin-left: 8px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 8px;

  .card-list__trash {
    cursor: pointer;
    padding: 6px;
  }

  .card-list__trash svg {
    fill: ${pallete.navy};
  }

  .card-list__trash:hover {
    background-color: #dadbe2;
  }
`;

const TitleInput = styled(Input)`
  flex: 1;
  box-shadow: none;
  padding: 4px 8px;
  color: ${pallete.navy};
  font-weight: 600;
  font-size: 14px;
`;

const CardItems = styled.div``;

const CreateCardItemButton = styled(Button)`
  color: #5e6c84;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
