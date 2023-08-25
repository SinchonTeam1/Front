import React, { useState } from "react";
//import { Routes } from "react-router-dom";
import { LoginInfo } from "./context/LoginUseContext";
import MainPage from "./pages/MainPage";

function App() {
  //loggedInuser가 1이면 이대, 2면 서강대, 3이면 연대, 4이면 홍대로 진행함
  const [loggedInUser, setLoggedInUser] = useState(""); // 로그인 상태와 상태 변경 함수 선언 (전역변수 같은거라고 생각하면 됨)

  return (
    <div className="App">
      <LoginInfo.Provider value={{ loggedInUser, setLoggedInUser }}>
        <MainPage />
        {/* <Routes> */}
        {/*<Route path="/mapHome" element={<MapHomepage />}></Route>*/}
        {/* </Routes> */}
      </LoginInfo.Provider>
    </div>
  );
}

export default App;
