import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../features/list/List";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  reorderCardinList,
  reorderList,
  selectAllLists,
} from "../features/list/ListSlice";
import AddList from "../features/list/AddList";
import MainTemplate from "../components/MainTemplate";
import { RootState } from "../store";
import { useParams } from "react-router";

export default function Board() {
  const dispatch = useDispatch();

  const lists = useSelector(selectAllLists);

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

  const { id } = useParams<{ id: string }>();
  const board = useSelector((state: RootState) =>
    state.board.boards.find((board) => board.id === parseInt(id))
  );

  if (!board) {
    return <div>not found board</div>;
  }

  return (
    <MainTemplate background={board?.background}>
      <Container>
        <Nav>
          <Button>트렐로 만들기</Button>
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
    </MainTemplate>
  );
}

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
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
