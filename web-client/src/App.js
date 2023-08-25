import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mypage from './pages/Mypage';
import CreateStudy from './pages/CreateStudy';
import Login from './pages/Login';



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path='/createstudy' element={<CreateStudy/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>
      </>
  );
}

export default App;
