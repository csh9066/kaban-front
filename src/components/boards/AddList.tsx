import React, { useRef, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import palette from "../../lib/palette";
import { addList, selectAllLists } from "../../store/listSlice";
import Button from "../common/Button";
import Input from "../common/Input";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store";

interface Props {}

export default function AddList(props: Props) {
  const [isAddable, setIsAddable] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listLastOrder = useSelector((state: RootState) => {
    const lists = selectAllLists(state);
    return lists[lists.length - 1]?.order || 0;
  });
  console.log(listLastOrder);

  const dispatch = useDispatch();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onToggleIsAddable = () => {
    setIsAddable(!isAddable);
  };

  const onAddList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.length) {
      return;
    }

    dispatch(
      addList({
        id: uuidv4(),
        order: listLastOrder + 1,
        title,
      })
    );
    setTitle("");
    inputRef.current?.focus();
  };

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
  &:not(:first-child) {
    margin-left: 8px;
  }
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
