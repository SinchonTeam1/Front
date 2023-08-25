import React from "react";
import { styled } from "styled-components";
import { WriteBtn } from "./HeaderIcon";
import userCircle from "../../image/userCircle.png";
import mainLogo from "../../image/mainLogo.png";

function Header(props) {
  return (
    <div>
      <Headerdiv>
        <Logo src={mainLogo} />
        <LeftSide>
          <WriteBtn />
          <StyledUserProfile src={userCircle} />
        </LeftSide>
      </Headerdiv>
    </div>
  );
}

const Headerdiv = styled.div`
  display: flex;
  max-width: 460px;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
`;

const LeftSide = styled.div`
  margin-right: 20px;
  justify-content: space-between;
`;

const StyledUserProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

export default Header;
