import React, { useState } from "react";
import Study from '../components/Study';
import { styled } from 'styled-components';
import ewha from '../image/ewha.png';
import underbar from '../image/underbar.png';
const Mypage=()=>{


    return(
        <>
        <Wrapper>
        <Mybox>
        <ImgWrapper> <img src={ewha} width={50}/></ImgWrapper>
        <InfoWrapper>
           <div className='univ'>이화여자대학교 </div>
            <div className='name'>김멋사</div>
            <div className='mail'>likelion@ewhain.net </div>
        </InfoWrapper>
        </Mybox>

        <Menu> 
        <div className='bookmark'>북마크</div>
        <div className='mypost'>내 게시글</div>
        </Menu>
  
        <Study/>
        <Study/>
        <Study/>

        </Wrapper>

        </>

    );

};
export default Mypage;
const Wrapper=styled.div`
`;
const Mybox=styled.div`
display:flex;
align-items:center;
width: 417px;
height: 82px;
border-radius: 10px;
background: #404040;
box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.25);

`;
const ImgWrapper=styled.div`
margin-left:20px;
`;
const InfoWrapper=styled.div`
.univ{
    margin-left:15px;
    color: #B0B0B0;
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.name{
    margin-left:15px;
    margin-top:5px;
    color: #FFF;
font-family: Noto Sans KR;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.mail{
    margin-left:230px;
    font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #FFF;
}
`;
const Menu=styled.div`
display:flex;
justify-contents:center;
.bookmark{

}
.mypost{

}
`;