import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setID] = useState("");
  const [password, setPW] = useState("");

  const handleChange = (e) => {
    setID(e.target.value);
  };
  const handleChange2 = (e) => {
    setPW(e.target.value.toString());
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Logo>LOGO</Logo>
          <InputWrapper>
            <div class="input">학교 이메일 주소</div>
            <input
              type="text"
              placeholder="ex) likelion@sogang.ac.kr"
              value={username}
              onChange={handleChange}
            ></input>
            <div class="inputpass">비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={handleChange2}
            ></input>
            <button class="btn_login">로그인</button>
          </InputWrapper>
          <BottomWrapper>
            <div className="question">계정이 없나요?</div>
            <div className="signup">회원가입하기</div>
          </BottomWrapper>
        </Container>
      </Wrapper>
    </>
  );
};
export default Login;
const Logo = styled.div``;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
`;
const Container = styled.div``;
const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 60px;

  .question {
    color: #aeaeae;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .signup {
    margin-left: 20px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }
`;
const InputWrapper = styled.div`
  .inputpass {
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  input {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: #fff;
    width: 420px;
    height: 60px;
  }
  .btn_login {
    margin-top: 15px;
    width: 420px;
    height: 50px;
    border-radius: 10px;
    background: #5f5f5f;
    box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.25);
  }
`;
