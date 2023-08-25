import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ApplyButton() {
  const navigate = useNavigate();
  const gotoapply = () => {
    navigate("/createstudy");
  };
  return <Button onClick={gotoapply}>바로 지원하기</Button>;
}

const Button = styled.button`
  display: block;
  color: white;
  font-size: 14px;
  font-weight: 700;
  margin: auto;
  width: 90%;
  height: 50px;
  background-color: #003378;
  border: none;
  border-radius: 10px;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 460px;
  bottom: 20px;
`;
export default ApplyButton;
