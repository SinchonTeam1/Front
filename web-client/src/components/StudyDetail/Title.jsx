import React from 'react';
import styled from 'styled-components';
import filledbookmark from '../../image/filledbookmark.png';
import bookmark from '../../image/bookmark.png';
import ewha from '../../image/ewha.png';
import { useState } from 'react';

function Title(props) {
    // const [isFilled, setIsFilled] = useState(false);

    // const toggleBookmark = () => {
    //     setIsFilled((prevState) => !prevState);
    // };
    return (
        <div>
            <RowContainer>
                <Wrap>
                    <AreaDiv>area{props.area}</AreaDiv>
                    <CompanyDiv>company{props.company}</CompanyDiv>
                </Wrap>

                <BookmarkDiv>
                    <img src={filledbookmark} width={25} />
                </BookmarkDiv>
            </RowContainer>

            <TitleDiv>네이버 백엔드 개발 스터디 모집</TitleDiv>
            <Host>
                <UnivImg src={ewha} alt="대학교" />
                김멋사
            </Host>
        </div>
    );
}
const UnivImg = styled.img`
    width: 26px;
    margin-right: 6.75px;
`;

const Host = styled.div`
    display: flex;
    justify-content: center;
    /* margin: auto; */
    margin-top: 13px;
    color: #676767;
    font-size: 20px;
    font-weight: 500;
`;

const RowContainer = styled.div`
    position: relative;
    &::after {
        content: ' ';
        display: block;
        clear: both;
    }
`;

const BookmarkDiv = styled.div`
    float: right;
    margin-top: 29px;
    margin-right: 15px;
`;

const TitleDiv = styled.div`
    margin: auto;
    margin-top: 30px;
    width: 90%;
    color: #000000;
    font-size: 24px;
    text-align: center;
    font-weight: 800;
`;

const Wrap = styled.div`
    /* margin: auto; */
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -50%);
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
    background-color: #003378;
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
