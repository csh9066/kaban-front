import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../features/list/List";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  reorderCardinList,
  reorderList,
  selectAllLists,
} from "../features/list/listSlice";
import AddList from "../features/list/AddList";

interface Props {}

export default function BoardsPage(props: Props) {
  const lists = useSelector(selectAllLists);

  const dispatch = useDispatch();

  const onDragEnd = ({ destination, source, type }: DropResult) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "list") {
      dispatch(reorderList({ source, destination }));
    }

    if (type === "card") {
      dispatch(reorderCardinList({ source, destination }));
    }
  };

  return (
    <Container>
      <Nav>
        <Button>공부 리스트 </Button>
        <Button>초대하기</Button>
      </Nav>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal" type="list">
          {({ innerRef, droppableProps, placeholder }) => (
            <Content ref={innerRef} {...droppableProps}>
              {lists.map((list, index) => (
                <List list={list} key={list.id} index={index} />
              ))}
              {placeholder}
              <AddList />
            </Content>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: transparent;
`;

const Nav = styled.div`
  padding: 8px 4px 4px 8px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
`;
