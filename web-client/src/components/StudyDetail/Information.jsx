import React from 'react';
import styled from 'styled-components';

function Information() {
    return (
        <InformationBox>
            <GridContainer>
                <li>
                    <InformTitle>게시 날짜</InformTitle>
                    <InformContent>2023.08.24.</InformContent>
                </li>
                <li>
                    <InformTitle>마감 날짜</InformTitle>
                    <InformContent>2023.09.12.</InformContent>
                </li>
                <li>
                    <InformTitle>모집 인원</InformTitle>
                    <InformContent>8명</InformContent>
                </li>
                <li>
                    <InformTitle>시작 예정</InformTitle>
                    <InformContent>2023.09.18.</InformContent>
                </li>
                <li>
                    <InformTitle>예상 기간</InformTitle>
                    <InformContent>1개월</InformContent>
                </li>
            </GridContainer>
        </InformationBox>
    );
}

const InformTitle = styled.span`
    color: #676767;
    margin-right: 10px;
`;

const InformContent = styled.span`
    color: black;
`;

const InformationBox = styled.div`
    width: 90%;
    height: 95px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: auto;
    margin-top: 31px;
    font-size: 12px;
    font-weight: 700;
`;
const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2개의 열 생성 */
    gap: 10px; /* 행과 열 사이의 간격 설정 */
    list-style: none;
    width: 85%;
    margin: auto;
    margin-top: 12px;
    padding: 0;
`;

export default Information;
