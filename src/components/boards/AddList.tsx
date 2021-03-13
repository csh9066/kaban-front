import React, { useRef, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import palette from "../../lib/palette";
import { addList } from "../../store/listSlice";
import Button from "../common/Button";
import Input from "../common/Input";
import { v4 as uuidv4 } from "uuid";

interface Props {}

export default function AddList(props: Props) {
  const [isAddable, setIsAddable] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onToggleIsAddable = () => {
    setIsAddable(!isAddable);
  };

  const onAddList = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Container>
      {isAddable ? (
        <AddListForm onSubmit={onAddList}>
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
            <CloseFormButton>
              <MdClose onClick={onToggleIsAddable} />
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
