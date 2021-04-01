import React from "react";
import { BsFillKanbanFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/palette";

interface Props {
  children: React.ReactNode;
  errorMessage?: string;
  type: "login" | "register";
}

function AuthTemplate({ children, type, errorMessage }: Props) {
  return (
    <Container>
      <Brand>
        <BsFillKanbanFill />
        <h1>Kanban</h1>
      </Brand>
      <Wrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Title>{type === "login" ? "로그인" : "회원가입"}</Title>
        {children}

        <Divide />
        <Footer>
          {type === "login" ? (
            <Link to="/register">회원 가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
          <div className="border"></div>
          <Link to="/login">게스트 입장</Link>
        </Footer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f1f3f5;

  @media (max-width: 640px) {
    background-color: ${palette.white};
  }
`;

const Brand = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${palette.blue};
    width: 48px;
    height: auto;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: ${palette.navy};
    margin-left: 8px;
  }

  @media (max-width: 640px) {
    height: 63px;
  }
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 25px 40px;
  background-color: ${palette.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  border-radius: 2px;

  @media (max-width: 640px) {
    box-shadow: none;
  }
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 25px;
  text-align: center;
  color: #5e6c84;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

const GoogleLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-top: 20px;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
  background-color: ${palette.white};
  border: transparent;
  border-radius: 3px;
  color: #505f79;
  outline: none;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  .text {
    font-weight: bold;
    margin-left: 4px;
  }
`;

const Divide = styled.div`
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: 24px 0;
  border-top: 1px solid hsl(0, 0%, 80%);
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  font-weight: 300;
  color: #0052cc;

  .border {
    margin: 0 5px;
    color: black;
  }
`;

const ErrorMessage = styled.p`
  display: inline-block;
  padding: 0.5em 1em;
  background: #eb5a46;
  border-radius: 4px;
  margin: 14px 0;
  color: #fbedeb;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.333;
`;

export default AuthTemplate;
