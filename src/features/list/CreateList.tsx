import React, { useRef, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import styled from "styled-components";
import palette from "../../lib/palette";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useCreateList from "./hooks/useCreateList";

interface Props {}

export default function CreateList(props: Props) {
  const createList = useCreateList();
  const [title, setTitle] = useState("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const [isAddable, setIsAddable] = useState(false);
  const onToggleIsAddable = () => {
    setIsAddable(!isAddable);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.length) {
      return;
    }

    createList(title);
    setTitle("");
    inputRef.current?.focus();
  };

  return (
    <Container>
      {isAddable ? (
        <AddListForm onSubmit={onSubmitForm}>
          <Input
            autoFocus
            placeholder="Enter list title..."
            value={title}
            onChange={onChangeTitle}
            ref={inputRef}
          />
          <div className="btn-group">
            <Button color="primary" type="submit">
              Add List
            </Button>
            <CloseFormButton onClick={onToggleIsAddable}>
              <MdClose />
            </CloseFormButton>
          </div>
        </AddListForm>
      ) : (
        <AddableListButton block icon={<MdAdd />} onClick={onToggleIsAddable}>
          Add another list
        </AddableListButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 272px;
  min-width: 272px;
  margin-left: 8px;
`;

const AddableListButton = styled(Button)`
  height: 40px;
`;

const AddListForm = styled.form`
  background-color: ${palette.gray};
  padding: 4px;

  .btn-group {
    display: flex;
    margin-top: 8px;
  }
`;

const CloseFormButton = styled.div`
  padding: 8px;
  cursor: pointer;
`;
