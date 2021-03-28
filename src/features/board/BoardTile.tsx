import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/palette";
import { BoardTileColumnStyle, BoardTileStyle } from "../../lib/styles";

interface Props {
  children?: React.ReactNode;
  to: string;
  theme?: string;
}

function BoardTile({ children, to, theme }: Props) {
  return (
    <Container to={to}>
      <Wrapper theme={theme}>
        <Fade />
        {children}
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

const Container = styled(Link)`
  ${BoardTileColumnStyle}
`;

const Wrapper = styled.div<{ theme: String }>`
  ${BoardTileStyle}
  background-color: ${({ theme }) => theme || palette.blue};
  color: ${palette.white};
  &:hover ${Fade} {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default BoardTile;
