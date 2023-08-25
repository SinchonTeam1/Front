import React, { useEffect, useState } from "react";
import Study from "../components/Study";
import { styled } from "styled-components";
import Header from "../components/mainPage/Header";
import MyPost from "../components/MyPost";
import ewha from "../image/ewha.png";
import axios from "axios";

const Mypage = () => {
  const [isBookmark, setBookmark] = useState(true);
  const [isMyPost, setMyPost] = useState(false);
  const [data, setData] = useState("");

  const handleBookmarkClick = () => {
    setMyPost(false);
    setBookmark(true);
  };

  const handleMyPostClick = () => {
    setMyPost(true);
    setBookmark(false);
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    console.log(`Bearer ${localStorage.getItem("access")}`);
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    };
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/mypages/`, { headers })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      <Header />
      <Mybox>
        <ImgWrapper>
          <img src={ewha} width={50} />
        </ImgWrapper>
        <InfoWrapper>
          <div className="univ">이화여자대학교 </div>
          <div className="name">김멋사</div>
          <div className="mail">likelion@ewhain.net </div>
        </InfoWrapper>
      </Mybox>
      <Menu isBookmark={isBookmark} isMyPost={isMyPost}>
        <button className="bookmark" onClick={handleBookmarkClick}>
          북마크
        </button>
        <button className="mypost" onClick={handleMyPostClick}>
          내 게시글
        </button>
      </Menu>

      {isBookmark ? <Study /> : <MyPost data={data} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  max-width: 460px;
  margin: 20px auto;
`;
const Mybox = styled.div`
  display: flex;
  align-items: center;
  width: 417px;
  height: 82px;
  border-radius: 10px;
  background: #003378;
  box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.25);
`;
const ImgWrapper = styled.div`
  margin-left: 20px;
`;
const InfoWrapper = styled.div`
  .univ {
    margin-left: 15px;
    color: #b0b0b0;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .name {
    margin-left: 15px;
    margin-top: 5px;
    color: #fff;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .mail {
    margin-left: 230px;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #fff;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 417px;
  margin-top: 10px;

  .bookmark {
    width: 208.5px;
    background-color: transparent;
    border-color: transparent;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.isBookmark ? "#003378" : "#AEAEAE")};
    border-bottom: 2px solid
      ${(props) => (props.isBookmark ? "#003378" : "white")};
  }

  .mypost {
    width: 208.5px;
    background-color: transparent;
    border-color: transparent;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.isMyPost ? "#003378" : "#AEAEAE")};
    border-bottom: 2px solid
      ${(props) => (props.isMyPost ? "#003378" : "white")};
  }
`;

export default Mypage;
