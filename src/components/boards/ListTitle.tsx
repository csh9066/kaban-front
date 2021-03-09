import React, { useState } from "react";
import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import styled, { css } from "styled-components";
import palette from "../../lib/palette";
import Input from "../common/Input";

interface Props {
  title: string;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

export default function ListTitle({ title, dragHandleProps }: Props) {
  const [allowRename, setAllowRename] = useState(false);

  const onToggleAllowRename = () => {
    setAllowRename(!allowRename);
  };

  const onChangeTitle = () => {};

  return (
    <Container {...dragHandleProps} onClick={onToggleAllowRename}>
      {allowRename ? (
        <TitleInput
          value={title}
          onChange={onChangeTitle}
          onBlur={onToggleAllowRename}
          autoFocus
        />
      ) : (
        <Title>{title}</Title>
      )}
      <div
        className="card-list__trash"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <BsFillTrashFill />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 8px;

  .card-list__trash {
    cursor: pointer;
    padding: 6px;
  }

  .card-list__trash svg {
    fill: ${palette.navy};
  }

  .card-list__trash:hover {
    background-color: #dadbe2;
  }
`;

const TitleCss = css`
  flex: 1;
  box-shadow: none;
  padding: 4px 8px;
  color: ${palette.navy};
  font-weight: 600;
  font-size: 14px;
`;

const Title = styled.div`
  ${TitleCss}
`;

const TitleInput = styled(Input)`
  ${TitleCss}
`;
