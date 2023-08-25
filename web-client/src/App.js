import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage";
import CreateStudy from "./pages/CreateStudy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signup2 from "./pages/Signup2";

import Signup3 from "./pages/Signup3";

import MainPage from "./pages/MainPage";
import StudyDetail from "./pages/StudyDetail";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/createstudy" element={<CreateStudy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />

          <Route path="/signup3" element={<Signup3 />} />

          <Route path="/detail" element={<StudyDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
