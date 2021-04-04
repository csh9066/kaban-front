import AuthTemplate from "./AuthTemplate";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import palette from "../../lib/palette";
import { RegisterForm } from "./types";
import useRegister from "./hooks/useRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const REQUIRED_MESSAGE = "필수 정보입니다.";

const schema = yup.object().shape({
  email: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .email("이메일 형식에 맞게 입력해주세요"),
  password: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .min(8, "최소 8글자 이상으로 입력해주세요"),
  passwordCheck: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .oneOf([yup.ref("password"), null], "패스워드가 일치하지 않습니다."),
  username: yup.string().required(REQUIRED_MESSAGE),
});

function Register() {
  const { loading, error, register: onRegister } = useRegister();

  const onSubmitForm = (data: RegisterForm) => {
    const { passwordCheck, ...registerData } = data;
    onRegister(registerData);
  };

  const { register, handleSubmit, errors } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });

  return (
    <AuthTemplate type="register">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormItem>
          <Input placeholder="이메일" name="email" ref={register} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </FormItem>
        <FormItem>
          <Input
            placeholder="비밀번호"
            type="password"
            name="password"
            ref={register}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </FormItem>
        <FormItem>
          <Input
            placeholder="비밀번호 확인"
            type="password"
            name="passwordCheck"
            ref={register}
          />
          <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>
        </FormItem>

        <FormItem>
          <Input placeholder="이름" name="username" ref={register} />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </FormItem>
        <Button color="primary" block align="center" size="large" type="submit">
          회원가입
        </Button>
      </form>
    </AuthTemplate>
  );
}

const FormItem = styled.div`
  margin-bottom: 15px;
`;

const ErrorMessage = styled.div`
  color: ${palette.red};
  font-size: 14px;
  padding: 5px 0 0 5px;
`;

export default Register;
