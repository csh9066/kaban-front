import styled from "styled-components";
import pallete from "../../lib/palette";
import Button from "../common/Button";
import { MdAdd } from "react-icons/md";
import Card from "./Card";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ListTitle from "./ListTitle";

interface Props {
  id: string;
  index: number;
  title: string;
  cards: { id: string; title: string }[];
}

export default function List({ id, title, index, cards }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <StyeldList ref={innerRef} {...draggableProps}>
          <div className="container">
            <ListTitle title={title} dragHandleProps={dragHandleProps} />
            <Droppable droppableId={id}>
              {({ innerRef, droppableProps, placeholder }) => (
                <div ref={innerRef} {...droppableProps}>
                  {cards.map((card, index) => (
                    <Card
                      id={card.id}
                      index={index}
                      key={card.id}
                      title={card.title}
                    />
                  ))}
                  {placeholder}
                </div>
              )}
            </Droppable>
            <div className="card-list__create-btn-wrapper">
              <CreateCardItemButton block icon={<MdAdd />}>
                Add another card
              </CreateCardItemButton>
            </div>
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

  .card-list__create-btn-wrapper {
    padding: 8px;
  }

  & + & {
    margin-left: 8px;
  }
`;

const CreateCardItemButton = styled(Button)`
  color: #5e6c84;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
