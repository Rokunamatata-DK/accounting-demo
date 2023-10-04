// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrialBalance from './components/TrialBalance';
import TCodeAssign from './components/TCodeAssign';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">TCode Assign</Link>
                        </li>
                        <li>
                            <Link to="/trial-balance">Trial Balance</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<><h1>TCode Assign Page</h1><TCodeAssign /></>} />
                    <Route path="/trial-balance" element={<><h1>Trial Balance</h1><TrialBalance /></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
