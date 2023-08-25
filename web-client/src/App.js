import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Mypage from './pages/Mypage';
import CreateStudy from './pages/CreateStudy';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Signup2 from './pages/Signup2';
import StudyDetail from './pages/StudyDetail';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/createstudy" element={<CreateStudy />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup2" element={<Signup2 />} />
                    <Route path="/detail" element={<StudyDetail />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
