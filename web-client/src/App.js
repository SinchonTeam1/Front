import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from './pages/Mypage';
import CreateStudy from './pages/CreateStudy';



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path='/createstudy' element={<CreateStudy/>}/>
      </Routes>
      </Router>
      </>
  );
}

export default App;
