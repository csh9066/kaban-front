import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/palette";
import { BoardTileColumnStyle, BoardTileStyle } from "../../lib/styles";
import CreateBoardModal from "./CreateBoardModal";

interface Props {}

function CreateBoard(props: Props) {
  const [modalVsibile, setModalVisible] = useState(false);
  const onToggleModal = () => {
    setModalVisible(!modalVsibile);
  };
  return (
    <>
      <Container onClick={onToggleModal}>
        <Wrapper>
          <Fade />
          Create New Board
        </Wrapper>
      </Container>
      <CreateBoardModal visible={modalVsibile} onCancel={onToggleModal} />
    </>
  );
}

const Fade = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Container = styled.button`
  ${BoardTileColumnStyle}
  border: none;
  outline: none;
  background: none;
`;

const Wrapper = styled.div`
  ${BoardTileStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.navy};
  background-color: ${palette.gray};
  font-size: 14px;

  &:hover ${Fade} {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default CreateBoard;
