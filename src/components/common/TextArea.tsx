import React from "react";
import styled from "styled-components";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea(props: Props) {
  return <Container {...props}></Container>;
}

const Container = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 32px;
  padding: 6px 8px 2px;
  outline: none;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  line-height: 1.5715;
  overflow: hidden;
`;
