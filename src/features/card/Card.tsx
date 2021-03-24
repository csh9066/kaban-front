import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ICard } from "../../../types/board";
import palette from "../../lib/palette";

interface Props {
  index: number;
  card: ICard;
}

export default function Card({ index, card }: Props) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container ref={innerRef} {...draggableProps} {...dragHandleProps}>
          <Title>{card.title}</Title>
        </Container>
      )}
    </Draggable>
  );
}

const Container = styled.div`
  padding: 6px 8px 6px;
  margin: 0 8px 8px 8px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  background-color: ${palette.white};
  cursor: pointer;
  &:hover {
    background-color: #f4f5f7;
  }
`;

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  color: ${palette.navy};
  line-height: 20px;
  word-wrap: break-word;
`;
