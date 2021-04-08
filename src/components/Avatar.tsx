import React from "react";
import styled from "styled-components";

interface Props extends React.HtmlHTMLAttributes<unknown> {
  children: React.ReactNode;
}

function Avatar({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
  cursor: pointer;
`;

export default Avatar;
