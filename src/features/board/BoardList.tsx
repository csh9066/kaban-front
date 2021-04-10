import { BsGrid3X3GapFill } from "react-icons/bs";
import styled from "styled-components";
import Loader from "../../components/Loader";
import MainTemplate from "../../components/MainTemplate";
import BoardTile from "./BoardTile";
import CreateBoard from "./CreateBoard";
import useFetchBoards from "./hooks/useFetchBoards";

function BoardList() {
  const { boards, loading } = useFetchBoards();

  if (loading) {
    return <Loader />;
  }

  return (
    <MainTemplate>
      <Container>
        <Wrapper>
          <Title>
            <BsGrid3X3GapFill />
            <h1>All Boards</h1>
          </Title>
          <BoardTiles>
            {boards.map((board) => (
              <BoardTile
                key={board.id}
                theme={board.background}
                to={`/b/${board.id}`}
              >
                {board.title}
              </BoardTile>
            ))}
            <CreateBoard />
          </BoardTiles>
        </Wrapper>
      </Container>
    </MainTemplate>
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
