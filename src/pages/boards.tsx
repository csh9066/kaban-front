import React from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import CardList from "../components/boards/CardList";
import Button from "../components/common/Button";

interface Props {}

export default function BoardsPage(props: Props) {
  return (
    <StyeldBoardsPage>
      <BoardNav>
        <Button>공부 리스트 </Button>
        <Button>초대하기</Button>
      </BoardNav>
      <BoardConent>
        <CardList>안녕</CardList>
        <CardList></CardList>
        <CardList></CardList>
        <CreateCardListButton block icon={<MdAdd />}>
          Add another list
        </CreateCardListButton>
      </BoardConent>
    </StyeldBoardsPage>
  );
}

const StyeldBoardsPage = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: transparent;
`;

const BoardNav = styled.div`
  padding: 8px 4px 4px 8px;
`;

const BoardConent = styled.div`
  flex: 1;
  display: flex;
  padding: 0 8px;
  overflow-y: auto;
`;

const CreateCardListButton = styled(Button)`
  height: 40px;
  width: 272px;
  min-width: 272px;
  margin-left: 8px;
`;
