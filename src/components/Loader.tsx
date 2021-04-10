import Loading from "react-loading";
import styled from "styled-components";
import palette from "../lib/palette";

function Loader() {
  return (
    <Container>
      <Loading type="bars" color={`${palette.blue}`} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export default Loader;
