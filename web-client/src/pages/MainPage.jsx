import React from "react";
import { styled } from "styled-components";
import Header from "../components/mainPage/Header";
import SearchHeader from "../components/mainPage/SearchHeader";
import Toggle from "../components/mainPage/Toggle";
import Study from "../components/Study";

function MainPage(props) {
  return (
    <div>
      <MainPageDiv>
        <Header />
        <SearchHeader />
        <Toggle />
        <Study />
      </MainPageDiv>
    </div>
  );
}

const MainPageDiv = styled.div`
  height: 100vh;
  max-width: 460px;
  margin: 20px auto;
`;

export default MainPage;
