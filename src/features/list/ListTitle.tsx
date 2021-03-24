import React, { useState } from "react";
import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import palette from "../../lib/palette";
import { updateList } from "./listSlice";
import Input from "../../components/Input";

interface Props {
  title: string;
  listId: string;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

export default function ListTitle({ title, listId, dragHandleProps }: Props) {
  const [localTitle, setLocaltitle] = useState(title);
  const onChangeLocalTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocaltitle(e.target.value);
  };

  const dispatch = useDispatch();
  const [allowRename, setAllowRename] = useState(false);

  const onUpdateTitle = () => {
    setAllowRename(!allowRename);

    if (localTitle === title || !localTitle.length) {
      setLocaltitle(title);
      return;
    }

    dispatch(
      updateList({
        id: listId,
        changes: {
          title: localTitle,
        },
      })
    );
  };

  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onUpdateTitle();
    }
  };

  return (
    <Container {...dragHandleProps}>
      {allowRename ? (
        <TitleInput
          autoFocus
          value={localTitle}
          onChange={onChangeLocalTitle}
          onBlur={onUpdateTitle}
          onKeyPress={onKeyPressEnter}
        />
      ) : (
        <Title onClick={() => setAllowRename(!allowRename)}>{title}</Title>
      )}
      <div className="card-list__trash">
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
