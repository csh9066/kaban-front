import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";

interface StyledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface Props extends StyledInputProps {}

export default React.forwardRef<HTMLInputElement, Props>(function Input(
  props,
  ref
) {
  return <StyeldInput ref={ref} {...props}></StyeldInput>;
});

const StyeldInput = styled.input<StyledInputProps>`
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  background-color: ${palette.gray};
  font-size: 14px;
  &:focus {
    box-shadow: inset 0 0 0 2px ${palette.blue};
  }
`;
