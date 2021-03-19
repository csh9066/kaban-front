import React, { useState } from "react";
import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import palette from "../../lib/palette";
import { updateList } from "../../store/listSlice";
import Input from "../common/Input";

interface Props {
  title: string;
  listId: string;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

export default function ListTitle({ title, listId, dragHandleProps }: Props) {
  const [localTitle, setLocaltitle] = useState(title);
  const onChangeLocalTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!title.length) {
      return;
    }
    setLocaltitle(e.target.value);
  };

  const dispatch = useDispatch();
  const onChangeTitle = () => {
    dispatch(
      updateList({
        id: listId,
        changes: {
          title,
        },
      })
    );
  };

  const [allowRename, setAllowRename] = useState(false);
  const onToggleAllowRename = () => {
    if (allowRename && title !== localTitle) {
      onChangeTitle();
    }
    setAllowRename(!allowRename);
  };

  return (
    <Container {...dragHandleProps} onClick={onToggleAllowRename}>
      {allowRename ? (
        <TitleInput
          value={localTitle}
          onChange={onChangeLocalTitle}
          onBlur={onToggleAllowRename}
          autoFocus
        />
      ) : (
        <Title>{localTitle}</Title>
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
