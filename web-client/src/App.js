import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage";

function App() {
  //loggedInuser가 1이면 이대, 2면 서강대, 3이면 연대, 4이면 홍대로 진행함
  const [loggedInUser, setLoggedInUser] = useState(""); // 로그인 상태와 상태 변경 함수 선언 (전역변수 같은거라고 생각하면 됨)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
