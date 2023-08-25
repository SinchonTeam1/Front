import React, { useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchHeader(props) {
  const [studyName, setStudyName] = useState("");

  const handleStudyNameChange = (event) => {
    setStudyName(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setStudyName(""); // 입력값을 빈칸으로 설정
    }
  };

  return (
    <div>
      <SearchHeaderDiv>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ marginRight: "10px", color: "#818181" }}
        />
        <InputStudyName
          className="search_studyName"
          type="text"
          placeholder="스터디명, 내용을 검색해보세요."
          value={studyName}
          onChange={handleStudyNameChange}
          onKeyPress={handleKeyPress}
        />
      </SearchHeaderDiv>
    </div>
  );
}
const SearchHeaderDiv = styled.div`
  max-width: 400px;
  background-color: #f4f4f4;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

const InputStudyName = styled.input`
  background-color: transparent;
  border-color: transparent;
  max-width: 300px;
  width: 100%;
`;

export default SearchHeader;
