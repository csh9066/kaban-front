import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";

interface Props {}

export default function CardItem(props: Props) {
  return (
    <StyledCardItem>
      <Title>안녕하세요</Title>
    </StyledCardItem>
  );
}

const StyledCardItem = styled.div`
  min-height: 20px;
  padding: 6px 8px 6px;
  margin: 0 8px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  background-color: ${palette.white};
  cursor: pointer;
  & + & {
    margin-top: 8px;
  }
  &:hover {
    background-color: #f4f5f7;
  }
`;

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  color: ${palette.navy};
`;
