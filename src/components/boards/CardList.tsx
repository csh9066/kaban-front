import React from "react";
import styled from "styled-components";
import Input from "../common/Input";
import pallete from "../../lib/palette";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "../common/Button";
import { MdAdd } from "react-icons/md";
import CardItem from "./CardItem";

interface Props {}

export default function CardList(props: Props) {
  return (
    <StyeldCardList>
      <div className="card-list__container">
        <Title>
          <TitleInput />
          <div className="card-list__ trash">
            <BsFillTrashFill />
          </div>
        </Title>
        <CardItem />
        <CardItem />
        <CardItem />
        <div className="card-list__create-btn-wrapper">
          <CreateCardItemButton block icon={<MdAdd />}>
            Add another card
          </CreateCardItemButton>
        </div>
      </div>
    </StyeldCardList>
  );
}

const StyeldCardList = styled.div`
  min-width: 272px;
  width: 272px;

  .card-list__container {
    background-color: ${pallete.gray};
    border-radius: 4px;
  }

  .card-list__create-btn-wrapper {
    padding: 8px;
  }

  & + & {
    margin-left: 8px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 8px;

  .card-list__trash {
    cursor: pointer;
    padding: 6px;
  }

  .card-list__trash svg {
    fill: ${pallete.navy};
  }

  .card-list__trash:hover {
    background-color: #dadbe2;
  }
`;

const TitleInput = styled(Input)`
  flex: 1;
  box-shadow: none;
  padding: 4px 8px;
  color: ${pallete.navy};
  font-weight: 600;
  font-size: 14px;
`;

const CreateCardItemButton = styled(Button)`
  color: #5e6c84;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
