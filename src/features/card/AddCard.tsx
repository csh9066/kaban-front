import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import palette from "../../lib/palette";
import { createCard } from "./cardSlice";
import Button from "../../components/Button";
import { v4 as uuidv4 } from "uuid";
import TextArea from "../../components/TextArea";

interface Props {
  listId: string;
}

export default function AddCard({ listId }: Props) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value.trimStart());
  };

  const [isAddable, setIsAddable] = useState(false);
  const onToggleIsAddable = () => {
    setIsAddable(!isAddable);
  };

  const onAddCard = () => {
    if (!title.length) {
      return;
    }

    dispatch(
      createCard({
        card: {
          id: uuidv4(),
          title,
        },
        listId,
      })
    );
    setTitle("");
  };

  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      onAddCard();
    }
  };

  const onSumbitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddCard();
  };

  return (
    <Container>
      {isAddable ? (
        <AddElementForm onSubmit={onSumbitForm}>
          <TextArea
            rows={3}
            autoFocus
            value={title}
            onChange={onChangeTitle}
            onKeyPress={onKeyPressEnter}
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
  background-color: ${palette.gray};
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
