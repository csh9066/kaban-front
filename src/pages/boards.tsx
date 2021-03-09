import React, { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import List from "../components/boards/List";
import Button from "../components/common/Button";

const mockLists = [
  {
    id: uuidv4(),
    title: "리액트 스타일링 하기",
    cards: [
      { id: uuidv4(), title: "카드 컴포넌트 스타일링" },
      { id: uuidv4(), title: "카드 리스트 컴포넌트 스타일링" },
      { id: uuidv4(), title: "보드 페이지 컴포넌트 스타일링" },
    ],
  },
  {
    id: uuidv4(),
    title: "리덕스 구조 만들기",
    cards: [
      { id: uuidv4(), title: "보드 스토어 구조 잡기" },
      { id: uuidv4(), title: "유저 스토어 구조 잡기" },
    ],
  },
];

interface Props {}

export default function BoardsPage(props: Props) {
  const [lists, setLists] = useState(mockLists);
  console.log(lists);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
  };

  return (
    <StyeldBoardsPage>
      <BoardNav>
        <Button>공부 리스트 </Button>
        <Button>초대하기</Button>
      </BoardNav>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal" type="list">
          {({ innerRef, droppableProps, placeholder }) => (
            <BoardConent ref={innerRef} {...droppableProps}>
              {lists.map(({ title, id, cards }, index) => (
                <List
                  id={id}
                  title={title}
                  key={id}
                  index={index}
                  cards={cards}
                />
              ))}
              {placeholder}
              <CreateListButton block icon={<MdAdd />}>
                Add another list
              </CreateListButton>
            </BoardConent>
          )}
        </Droppable>
      </DragDropContext>
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

const CreateListButton = styled(Button)`
  height: 40px;
  width: 272px;
  min-width: 272px;
  margin-left: 8px;
`;
