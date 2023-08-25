import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as RealLogo } from "./../logo.svg";

const Signup3 = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <LogoWrapper>
            <RealLogo width="184px" height="50px" />
          </LogoWrapper>
          <Contents>
            <div> 반가워요, 김멋사 님!</div>
            <LogoWrapper>
              <RealLogo width="60px" height="50px" />
            </LogoWrapper>
            <div className="intro">
              에서 스터디를 함께할 좋은 팀원들을 찾아보세요.
            </div>
          </Contents>
        </Container>
      </Wrapper>
    </>
  );
};
export default Signup3;
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

const Contents = styled.div``;
