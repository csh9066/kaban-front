import React from "react";
import styled from "styled-components";

interface StyelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
}

interface Props extends StyelButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({ children, icon, block, ...props }: Props) {
  return (
    <StyeldButton block={!!block} {...props}>
      {icon && <span className="btn__icon">{icon}</span>}
      {children && <span>{children}</span>}
    </StyeldButton>
  );
}

const StyeldButton = styled.button<StyelButtonProps>`
  display: ${(props) => (props.block ? "flex" : "inline-flex")};
  align-items: center;
  height: 32px;
  padding: 0 8px;
  border: none;
  border-radius: 3px;
  background-color: hsla(0, 0%, 100%, 0.24);
  outline: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  appearance: none;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.32);
  }

  .btn__icon {
    display: flex;
    align-items: center;
  }

  .btn__icon + span {
    margin-left: 6px;
  }

  & + & {
    margin-left: 4px;
  }
`;
