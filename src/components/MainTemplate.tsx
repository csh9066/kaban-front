import React from "react";
import styled from "styled-components";
import palette from "../lib/palette";
import Header from "./Header";

interface Props {
  background?: string;
  children: React.ReactNode;
}

function MainTemplate({ children, ...props }: Props) {
  return (
    <Container {...props}>
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ background }) => background || palette.blue};
`;

export default MainTemplate;
