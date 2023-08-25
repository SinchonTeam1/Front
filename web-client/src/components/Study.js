import React, { useState } from "react";
import styled from "styled-components";
import ewha from "../image/ewha.png";
import bookmark from "../image/bookmark.png";
const Study=()=>{
    return(
        <>
        <Wrapper>
            <ContentWrapper>
            <TopWrapper>
                <div className='field'>IT</div>
                <div className='company'>네이버</div>
                <img src={bookmark} />
            </TopWrapper>

            <TitleWrapper>네이버 백엔드 개발 스터디 모집</TitleWrapper>
            <Date> 
                <div className='end'>마감일 | 2023.09.12</div>
                <div className='postdate'>게시일 | 2023.08.24</div> 
            </Date>
            <BottomWrapper>
            <ImgWrapper>
                            <img src={ewha} />
                        </ImgWrapper>
                <div className='name'>김멋사</div>
                <div className='count'>모집 인원 8명</div>
            </BottomWrapper>
            </ContentWrapper>

        </Wrapper>
        </>
    );
};

export default Study;
const ContentWrapper=styled.div`
margin-top:25px;
margin-left:20px;
`;
const Wrapper=styled.div`
margin:20px auto;
width: 460px;
height: 155px;
background-color:white;
border-bottom: 1px solid #AEAEAE;

`;

const TitleWrapper=styled.div`
margin-top:13px;
color: #000;
font-family: Noto Sans KR;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const Date=styled.div`
margin-top:11px;
display:flex;
color: #818181;
font-family: Noto Sans KR;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
.postdate{
    margin-left:30px;
}
`;
const TopWrapper=styled.div`
img{
    margin-left:310px;
}

display:flex;
text-align:center;
font-style: normal;
font-weight: 700;
line-height: normal;
.field{
    
    width: 31px;
    height: 20px;
    border-radius: 20px;
    background: #D9D9D9;
    font-size: 12px;
    
}
.company{
    
    margin-left:7px;
    border-radius: 20px;
background: #676767;
width: 54px;
height: 20px;
color: #FFF;
font-size: 12px;
}
`;
const BottomWrapper=styled.div`
margin-top:23px;
display:flex;
.name{
    margin-left:8px;
    font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.count{
    margin-left:280px;
    color: #818181;
font-family: Noto Sans KR;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;

const ImgWrapper=styled.div`
`;