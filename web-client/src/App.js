import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage";
import CreateStudy from "./pages/CreateStudy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signup2 from "./pages/Signup2";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/createstudy" element={<CreateStudy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
