import React from "react";
import { styled } from "styled-components";
import { WriteBtn, UserProfile } from "./HeaderIcon";

function Header(props) {
  return (
    <div>
      <Headerdiv>
        <Logo>Logo</Logo>
        <LeftSide>
          <WriteBtn />
          <StyledUserProfile />
        </LeftSide>
      </Headerdiv>
    </div>
  );
}

const Headerdiv = styled.div`
  display: flex;
  background-color: yellow;
  max-width: 460px;
  height: 22vh;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Logo = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  position: absolute;
  left: 0;
`;

const LeftSide = styled.div`
  position: absolute;
  right: 0;
`;

const StyledUserProfile = styled(UserProfile)`
  width: 30px;
  height: 30px;
`;

export default Header;
