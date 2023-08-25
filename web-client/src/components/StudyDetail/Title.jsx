import React from 'react';
import styled from 'styled-components';

function Title(props) {
    return (
        <div>
            <img src="./bookmark.png" />
            <Wrap>
                <AreaDiv>area{props.area}</AreaDiv>
                <CompanyDiv>company{props.company}</CompanyDiv>
            </Wrap>
            <TitleDiv>네이버 백엔드 개발 스터디 모집</TitleDiv>
            <div></div>
        </div>
    );
}

const TitleDiv = styled.div`
    margin: auto;
    margin-top: 11px;
    width: 80%;
    color: #000000;
    font-size: 27px;
    text-align: center;
    font-weight: 600;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 29px;
`;

const AreaDiv = styled.div`
    width: auto;
    background-color: #d9d9d9;
    border-radius: 20px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-weight: 600;
    padding: 0 10px 7px 10px;
    text-align: center;

    margin-right: 9px;
`;

const CompanyDiv = styled.div`
    width: auto;
    background-color: #676767;
    border-radius: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-weight: 600;
    padding: 0 10px 7px 10px;
    text-align: center;
`;

export default Title;
