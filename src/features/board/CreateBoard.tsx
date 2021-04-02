import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";
import { BoardTileColumnStyle, BoardTileStyle } from "../../lib/styles";

interface Props {}

function CreateBoard(props: Props) {
  return (
    <Container>
      <Wrapper>
        <Fade />
        Create New Board
      </Wrapper>
    </Container>
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
