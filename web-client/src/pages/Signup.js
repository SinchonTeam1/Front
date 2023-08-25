import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RealLogo } from "./../logo.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPW] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChange2 = (e) => {
    setNickname(e.target.value);
  };
  const handleChange3 = (e) => {
    setPW(e.target.value.toString());
  };

  const gotoSignUp2 = () => {
    navigate("/signup2");
  };

  return (
    <>
      <Wrapper>
        <Container>
          <LogoWrapper>
            <RealLogo width="184px" height="50px" />
          </LogoWrapper>
          <InputWrapper>
            <div class="input">학교 이메일 주소를 입력해주세요.</div>
            <div className="intro">
              다음 도메인만 가입 가능합니다.
              <br></br> <br></br>
              서강대학교 @sogang.ac.kr | 연세대학교 @yonsei.ac.kr <br></br>
              이화여자대학교 @ewhain.net | 홍익대학교 @hongik.ac.kr
            </div>
            <input
              type="text"
              placeholder="ex) likelion@sogang.ac.kr"
              value={email}
              onChange={handleChange}
            ></input>

            <div class="nickname">닉네임을 입력해주세요.</div>
            <input
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              onChange={handleChange2}
            ></input>

            <div class="inputpass">비밀번호를 입력해주세요.</div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={handleChange3}
            ></input>

            <button className="btn" onClick={gotoSignUp2}>
              인증하기
            </button>
          </InputWrapper>
          <BottomWrapper>
            <div className="question">계정이 있나요?</div>
            <div className="login">로그인하기</div>
          </BottomWrapper>
        </Container>
      </Wrapper>
    </>
  );
};
export default Signup;
const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 80px;
`;
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
  margin-top: 50px;

  .question {
    color: #aeaeae;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .login {
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
  .nickname {
    margin-top: 35px;
  }
  .intro {
    margin-top: 7px;
    color: #5f5f5f;
    font-family: Noto Sans KR;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .inputpass {
    margin-top: 40px;
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
  .btn {
    margin-top: 15px;
    width: 420px;
    height: 50px;
    border-radius: 10px;
    background: #003378;
    color: white;
    box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.25);
  }
`;
