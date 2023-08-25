import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
