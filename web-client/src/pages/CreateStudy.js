import React, { useState } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import MiniToggle from "../components/mainPage/MiniToggle";
import Header from "../components/mainPage/Header";
import setPostBtn from "../image/setPostBtn.png";
import { useNavigate } from "react-router-dom";

const CreateStudy = ({ title, options }) => {
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [term, setTerm] = useState("");
  const [people, setPeople] = useState("");
  const [link, setLink] = useState("");
  const [titles, setTitles] = useState("");
  const [contents, setContents] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    setCompany(e.target.value);
  };
  const handleChange2 = (e) => {
    setTerm(e.target.value);
  };
  const handleChange3 = (e) => {
    setPeople(e.target.value);
  };

  const handlePostBtnClick = () => {
    navigate("/");
  };

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Header />
          <Title>스터디 기본 정보를 입력해주세요.</Title>
          <Content>
            ❶ 분야
            <MiniToggle />
            <div>❷ 회사</div>
            <input
              type="text"
              placeholder="ex) 네이버"
              value={company}
              onChange={handleChange}
            ></input>
            <div>❸ 마감일</div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <div>❹ 스터디 시작 예정일</div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <div>❺ 예상 기간</div>
            <input
              type="text"
              placeholder="미정"
              value={term}
              onChange={handleChange2}
            ></input>
            <div>❻ 모집 인원</div>
            <input
              type="text"
              placeholder="미정"
              value={people}
              onChange={handleChange3}
            ></input>
            <div>❼ 연락 가능한 링크</div>
            <input
              type="text"
              placeholder="ex) 카카오톡 오픈채팅, Google Form 링크"
              value={link}
              onChange={handleChange3}
            ></input>
          </Content>
          <IntroWrapper>
            <div className="title"> 스터디에 대해 소개해 주세요.</div>
            <div>❶ 제목</div>
            <input
              className="inputitle"
              type="text"
              placeholder="ex) 네이버 백엔드 개발 스터디 모집"
              value={titles}
              onChange={handleChange3}
            ></input>
            <div>❷ 내용</div>
            <input
              className="inputcontent"
              type="text"
              placeholder="Tip!
                            자기 소개, 스터디 진행 방식, 정모 장소에 대한 내용을 포함하면 좋아요. "
              value={contents}
              onChange={handleChange3}
            ></input>
          </IntroWrapper>
          <img src={setPostBtn} onClick={handlePostBtnClick} />
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: #f9f9f9;
  width: 640px;
  margin: 0 auto;
`;
const ContentWrapper = styled.div`
  margin-left: 100px;
  margin-top: 5px;
`;
const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const Content = styled.div`
  line-height: 3;
  input {
    width: 420px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    background: #fff;
    color: #003378;
  }
  color: #003378;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const IntroWrapper = styled.div`
  .title {
    color: black;
  }
  margin-top: 70px;
  font-size: 16px;
  color: #003378;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  .inputcontent {
    width: 420px;
    height: 260px;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    background: #fff;
  }
  .inputitle {
    width: 420px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #aeaeae;
    background: #fff;
  }
`;
const ButtonDiv = styled.div`
  margin-top: 15px;
  max-width: 400px;
  display: flex;
  justify-content: space-evenly;
  margin-left: 30px;
`;

export default CreateStudy;
