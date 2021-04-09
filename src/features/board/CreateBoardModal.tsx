import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import useCreateBoard from "./hooks/useCreateBoard";

interface Props {
  visible: boolean;
  onCancel: () => void;
}

function CreateBoardModal({ visible, onCancel }: Props) {
  const [title, setTitle] = useState("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const createBoard = useCreateBoard();
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBoard(title);
    setTitle("");
    onCancel();
  };

  return (
    <Modal visible={visible} onCancel={onCancel}>
      <Container>
        <Title>
          <div className="text">Create board</div>
          <MdClose onClick={onCancel} />
        </Title>
        <form onSubmit={onSubmitForm}>
          <Input
            placeholder="보드 타이틀을 입력하세요"
            value={title}
            onChange={onChangeTitle}
            autoFocus
          />
          <Button color="primary" type="submit">
            Create board
          </Button>
        </form>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  width: 320px;
  padding: 20px;
  input {
    margin-bottom: 10px;
  }
  svg {
    cursor: pointer;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export default CreateBoardModal;
