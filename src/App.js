import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrialBalance from './components/TrialBalance';
import TCodeAssign from './components/TCodeAssign';
import TCodeManager from './components/TCodeManager';

function App() {
    const [tCodes, setTCodes] = useState([100, 110, 111, 200, 210, 300, 310, 400, 500]);
    const [assignedTCodes, setAssignedTCodes] = useState({});

    return (
        <Router>
            <div className="App">
                <header className="app-header">
                    <h1>Client Name</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/transaction">Transaction</Link>
                            </li>
                            <li>
                                <Link to="/trial-balance">Trial Balance</Link>
                            </li>
                            <li>
                                <Link to="/tcode-manager">TCode Manager</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                <div className="content">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h2>Transaction</h2>
                                <TCodeAssign
                                    tCodes={tCodes}
                                    assignedTCodes={assignedTCodes}
                                    setAssignedTCodes={setAssignedTCodes}
                                />
                            </>
                        } />
                        <Route path="/transaction" element={
                            <>
                                <h2>Transaction</h2>
                                <TCodeAssign
                                    tCodes={tCodes}
                                    assignedTCodes={assignedTCodes}
                                    setAssignedTCodes={setAssignedTCodes}
                                />
                            </>
                        } />
                        <Route path="/trial-balance" element={
                            <>
                                <h2>Trial Balance</h2>
                                <TrialBalance assignedTCodes={assignedTCodes} />
                            </>
                        } />
                        <Route path="/tcode-manager" element={
                            <>
                                <h2>TCode Manager</h2>
                                <TCodeManager tCodes={tCodes} setTCodes={setTCodes} />
                            </>
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
