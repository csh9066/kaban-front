import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthTemplate from "../auth/AuthTemplate";

function Login() {
  const [email, setEmail] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("babo");
  };

  return (
    <AuthTemplate type="login" errorMessage={errorMessage}>
      <form onSubmit={onSubmitForm}>
        <InputWithMarginBottom
          placeholder="이메일"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <InputWithMarginBottom
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <Button size="large" color="primary" block align="center" type="submit">
          로그인
        </Button>
      </form>
    </AuthTemplate>
  );
}

const InputWithMarginBottom = styled(Input)`
  margin-bottom: 20px;
`;

export default Login;
