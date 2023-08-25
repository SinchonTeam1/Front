import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [nickname,setNickname]=useState("");
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
    
    return (
        <>
            <Wrapper>
                <Container>
                    <Logo>LOGO</Logo>
                <InputWrapper>
                        <div class="input">학교 이메일 주소를 입력해주세요.</div>
                        <div className='intro'>다음 도메인만 가입 가능합니다.
<br></br> <br>
</br>
                        서강대학교 @sogang.ac.kr  |  연세대학교 @yonsei.ac.kr <br></br>
                        이화여자대학교 @ewhain.net  |  홍익대학교 @hongik.ac.kr
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

                        <button className='btn'>
                            인증하기
                        </button>

                    </InputWrapper>
                    <BottomWrapper>
                        <div className='question'>계정이 있나요?</div>
                        <div className='login' >
                            로그인하기
                        </div>
                            
                        </BottomWrapper>
                </Container>
               
            </Wrapper>
        </>
    );
};
export default Signup;
const Logo=styled.div`

`;
const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #F9F9F9;
`;
const Container=styled.div`
`;
const BottomWrapper=styled.div`
display: flex;
align-items: center;
margin-top:60px;

.question{
    color: #AEAEAE;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.login{
    margin-left:20px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
}

`;
const InputWrapper=styled.div`
.nickname{
    margin-top:35px;
}
.intro{
    margin-top:7px;
    color: #5F5F5F;
font-family: Noto Sans KR;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.inputpass{
    margin-top:40px;
}
display: flex;
flex-direction: column;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
input{
    margin-top:10px;
    border-radius: 10px;
border: 1px solid #D9D9D9;
background: #FFF;
width: 420px;
height: 60px;
}
.btn{
    margin-top:15px;
    width: 420px;
height: 50px;
border-radius: 10px;
background: #5F5F5F;
box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.25);
}
`;
