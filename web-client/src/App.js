import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Mypage from './pages/Mypage';
import StudyDetail from './pages/StudyDetail';

function App() {
    return (
        <>
            <StudyDetail />
            {/* <Router>
      <Routes>
        <Route path="/mypage" element={<Mypage/>}/>
      </Routes>
      </Router> */}
        </>
    );
}

export default App;
