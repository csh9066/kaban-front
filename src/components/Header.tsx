import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BsFillKanbanFill, BsHouseDoor } from "react-icons/bs";

interface Props {}

export default function Header(props: Props) {
  return (
    <StyledHeader>
      <div className="header__menu-group">
        <Button icon={<BsHouseDoor />} />
        <Button icon={<BsFillKanbanFill />} />
      </div>
      <BrandLogo to="/">
        <BsFillKanbanFill />
        <h1>Kanban</h1>
      </BrandLogo>
      <div className="header__menu-group">
        <Button>로그인</Button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.15);
`;

const BrandLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;

  h1 {
    font-weight: 700;
    margin-left: 4px;
  }
`;
