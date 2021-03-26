import { BsGrid3X3GapFill } from "react-icons/bs";
import styled from "styled-components";
import BoardTile from "../features/board/BoardTile";
import CreateBoard from "../features/board/CreateBoard";

function BoardList() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <BsGrid3X3GapFill />
          <h1>All Boards</h1>
        </Title>
        <BoardTiles>
          <BoardTile to="b/4">공부 리스트</BoardTile>
          <BoardTile to="b/4">하이</BoardTile>
          <BoardTile to="b/4">하이</BoardTile>
          <BoardTile to="b/4">하이</BoardTile>
          <CreateBoard />
        </BoardTiles>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding-top: 40px;
`;

const Title = styled.div`
  font-size: 18px;
  display: flex;
  margin-bottom: 10px;
  padding-left: 8px;
  h1 {
    margin-left: 4px;
  }
`;

const BoardTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default BoardList;
