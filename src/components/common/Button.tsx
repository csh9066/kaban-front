import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/palette";

interface StyelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  color?: "default" | "primary";
}

interface Props extends StyelButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}
export default function Button({
  children,
  icon,
  block,
  color = "default",
  ...props
}: Props) {
  console.log(color);

  return (
    <StyeldButton block={!!block} color={color} {...props}>
      {icon && <span className="btn__icon">{icon}</span>}
      {children && <span>{children}</span>}
    </StyeldButton>
  );
}

const colorStyles = {
  default: css`
    background-color: hsla(0, 0%, 100%, 0.24);
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.32);
      opacity: 1;
    }
  `,
  primary: css`
    background-color: ${palette.green};
  `,
};

const StyeldButton = styled.button<StyelButtonProps>`
  display: inline-flex;
  align-items: center;
  width: ${({ block }) => block && "100%"};
  height: 32px;
  padding: 0 8px;
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  appearance: none;
  &:hover {
    opacity: 0.9;
  }

  ${(props) => colorStyles[props.color || "default"]}

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
