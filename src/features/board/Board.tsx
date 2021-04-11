import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../../features/list/List";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  reorderCardinList,
  reorderList,
  selectAllLists,
} from "../../features/list/ListSlice";
import { useParams } from "react-router";
import { RootState } from "../../store";
import MainTemplate from "../../components/MainTemplate";
import AddList from "../list/AddList";
import useFetchBoard from "./hooks/useFetchDetailBoard";
import Loader from "../../components/Loader";

export default function Board() {
  const { id } = useParams<{ id: string }>();
  const { loading, error } = useFetchBoard(id);
  const lists = useSelector(selectAllLists);
  const board = useSelector((state: RootState) => state.board.detail);
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

  if (loading) {
    return <Loader />;
  }

  if (!board && error) {
    return <div>{error.response?.data.message}</div>;
  }

  return (
    <MainTemplate background={board?.background}>
      <Container>
        <Nav>
          <Button>{board?.title}</Button>
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
