import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RealLogo } from "./../logo.svg";
import axios from "axios";

const Signup2 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const onClick = () => {
    const token = { token: code };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    console.log(token);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/user/verify-email/`,
        token,
        axiosConfig
      )
      .then((data) => navigate("/login"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Wrapper>
        <Container>
          <LogoWrapper>
            <RealLogo width="184px" height="50px" />
          </LogoWrapper>
          <InputWrapper>
            <div className="intro">
              likelion@sogang.ac.kr로 인증 코드가 포함된 메일을 보냈습니다.
            </div>
            <div className="title">코드를 입력해주세요.</div>
            <input type="text" value={code} onChange={handleChange}></input>

            <button className="btn" onClick={onClick}>
              가입하기
            </button>
          </InputWrapper>
        </Container>
      </Wrapper>
    </>
  );
};
export default Signup2;
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
  .title {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 10px;
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
