import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RealLogo } from './../logo.svg';

const Signup3 = () => {
    const navigate = useNavigate(); // 변경된 부분

    const handleButtonClick = () => {
        navigate('/MainPage'); // '/main' 경로로 이동
    };
    return (
        <Wrapper>
            <Container>
                <LogoWrapper>
                    <RealLogo width="184px" height="50px" />
                </LogoWrapper>

                <Contents>
                    <div className="greeting_Text">반가워요, 김멋사 님!</div>

                    <div className="intro">
                        <Synth>SYNTH</Synth>에서 스터디를 함께할 <br></br> 좋은
                        팀원들을 찾아보세요.
                    </div>
                </Contents>
                <Button onClick={handleButtonClick}>메인 페이지</Button>
            </Container>
        </Wrapper>
    );
};
export default Signup3;

const Button = styled.button`
    display: block;
    margin: auto;
    margin-top: 45px;
    width: 200px;
    height: 50px;
    background-color: #003378;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 18px;
`;

const LogoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 80px;
    margin-top: 150px;
`;
const Wrapper = styled.div`
    margin: auto;
    max-width: 460px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #f9f9f9;
`;
const Container = styled.div``;
const Synth = styled.span`
    color: #003378;
    font-weight: 700;
`;

const Contents = styled.div`
    margin: auto;
    text-align: center;
    .greeting_Text {
        font-size: 20px;
        font-weight: 700;
    }
    .intro {
        width: 100%;
        margin: auto;
        margin-top: 30px;
    }
`;
