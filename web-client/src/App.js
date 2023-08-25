import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from './pages/Mypage';



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/mypage" element={<Mypage/>}/>
      </Routes>
      </Router>
      </>
  );
}

export default App;
