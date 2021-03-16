import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../components/boards/List";
import Button from "../components/common/Button";
import { useSelector } from "react-redux";
import { selectAllLists } from "../store/listSlice";
import { RootState } from "../store";
import AddList from "../components/boards/AddList";

interface Props {}

export default function BoardsPage(props: Props) {
  const lists = useSelector((state: RootState) => selectAllLists(state));
  console.log(lists);

  const onDragEnd = (result: DropResult) => {};

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
              {lists.map(({ title, id }, index) => (
                <List id={id} title={title} key={id} index={index} />
              ))}
              {placeholder}
              <AddList />
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
