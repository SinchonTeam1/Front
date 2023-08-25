import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Toggle(props) {
  return (
    <ButtonDiv>
      <ToggleSection
        title="분야"
        options={[
          "전체",
          "개발",
          "경영/비즈니스",
          "마케팅/광고",
          "디자인",
          "영업",
          "교육",
          "고객서비스/리테일",
          "고객서비스/리테일",
          "고객서비스/리테일",
          "고객서비스/리테일",
          "고객서비스/리테일",
          "고객서비스/리테일",
          "고객서비스/리테일",
          "고객서비스/리테일",
        ]}
      />
      <ToggleSection
        title="회사"
        options={[
          "전체",
          "네이버",
          "카카오",
          "라인",
          "당근마켓",
          "토스",
          "삼성",
          "LG",
          "롯데",
        ]}
      />
      <ToggleSection title="정렬" options={["최신순", "마감 임박순"]} />
    </ButtonDiv>
  );
}

function ToggleSection({ title, options }) {
  const [isToggled, setToggle] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option); // 클릭한 아이템 값을 상태에 설정
    setToggle(false); // 리스트 숨기기
  };

  useEffect(() => {
    console.log(selectedValue); // selectedValue 값이 변경될 때마다 출력
  }, [selectedValue]);

  return (
    <Section>
      <Button selectedValue={selectedValue} onClick={handleToggle}>
        {selectedValue ? selectedValue : title}
        {isToggled ? (
          <FontAwesomeIcon
            icon={faCaretUp}
            style={{ color: selectedValue !== "" ? "black" : "#818181" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ color: selectedValue !== "" ? "black" : "#818181" }}
          />
        )}
      </Button>

      {isToggled && (
        <List>
          {options.map((option, index) => (
            <ListItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </ListItem>
          ))}
        </List>
      )}
    </Section>
  );
}

const ButtonDiv = styled.div`
  margin-top: 15px;
  max-width: 400px;
  display: flex;
  justify-content: space-evenly;
  margin-left: 30px;
`;

const Section = styled.div``;

const Button = styled.button`
  border-radius: 20px;
  min-width: 118px;
  height: 35px;
  border-color: ${(selectedValue) =>
    selectedValue !== "" ? "black" : "#aeaeae"};
  border-style: solid;
  color: ${(selectedValue) => (selectedValue !== "" ? "black" : "#aeaeae")};
  text-align: left;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: ${(selectedValue) =>
    selectedValue !== "" ? "bolder" : "light"};
`;

const List = styled.ul`
  min-width: 130px;
  list-style: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  padding-left: 0px;
  max-height: 300px;
  overflow: auto;
  border-radius: 10px;
  background-color: white;
  z-index: 2;
  position: absolute;
`;

const ListItem = styled.li`
  margin-top: 10px;
  font-size: 12px;
`;

export default Toggle;
