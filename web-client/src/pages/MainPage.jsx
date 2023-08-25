import React from "react";
import { styled } from "styled-components";
import Header from "../components/mainPage/Header";

function MainPage(props) {
  return (
    <div>
      <MainPageDiv>
        <Header />
      </MainPageDiv>
    </div>
  );
}

const MainPageDiv = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 460px;
  background-color: red;
`;

export default MainPage;
