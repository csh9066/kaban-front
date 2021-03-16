import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import palette from "../../lib/palette";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import { v4 as uuidv4 } from "uuid";
import { addCard } from "../../store/cardSlice";

interface Props {
  listId: string;
}

export default function AddCard({ listId }: Props) {
  const [isAddable, setIsAddable] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value.trimStart());
  };

  const onToggleIsAddable = (e: any) => {
    setIsAddable(!isAddable);
  };

  const onKeyDown = (e: any) => {
    if (e.code === "Enter") {
      dispatch(
        addCard({
          id: uuidv4(),
          title,
          listId,
          order: Math.random(),
        })
      );
      setTitle("");
    }
  };

  return (
    <Container>
      {isAddable ? (
        <AddElementForm
          onBlur={(e) => {
            e.stopPropagation();
          }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addCard({
                id: uuidv4(),
                title,
                listId,
                order: 1,
              })
            );
          }}
        >
          <TextArea
            rows={3}
            autoFocus
            value={title}
            onChange={onChangeTitle}
            onKeyPress={onKeyDown}
          />
          <div className="btn-group">
            <Button color="primary" type="submit">
              Add card
            </Button>
            <CloseFormButton onClick={onToggleIsAddable}>
              <MdClose />
            </CloseFormButton>
          </div>
        </AddElementForm>
      ) : (
        <AddableButton block icon={<MdAdd />} onClick={onToggleIsAddable}>
          Add another card
        </AddableButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 8px;
`;

const AddableButton = styled(Button)`
  color: #5e6c84;
  background-color: inherit;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

const AddElementForm = styled.form`
  background-color: ${palette.gray};

  .btn-group {
    display: flex;
    margin-top: 8px;
  }
`;

const CloseFormButton = styled.div`
  padding: 8px;
  cursor: pointer;
`;
