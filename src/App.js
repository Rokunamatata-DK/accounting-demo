import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrialBalance from './components/TrialBalance';
import TCodeAssign from './components/TCodeAssign';
import TCodeManager from './components/TCodeManager';

function App() {
    const [tCodes, setTCodes] = useState([100, 110, 111, 200, 210, 300, 310, 400, 500]);
    const [assignedTCodes, setAssignedTCodes] = useState({}); // State to store assigned TCodes for each transaction

    return (
        <Router>
            <div className="App">
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

                <Routes>
                    <Route path="/" element={
                        <>
                            <h1>Transaction</h1>
                            <TCodeAssign
                                tCodes={tCodes}
                                assignedTCodes={assignedTCodes}
                                setAssignedTCodes={setAssignedTCodes}
                            />
                        </>
                    } />
                    <Route path="/transaction" element={
                        <>
                            <h1>Transaction</h1>
                            <TCodeAssign
                                tCodes={tCodes}
                                assignedTCodes={assignedTCodes}
                                setAssignedTCodes={setAssignedTCodes}
                            />
                        </>
                    } />
                    <Route path="/trial-balance" element={
                        <>
                            <h1>Trial Balance</h1>
                            <TrialBalance assignedTCodes={assignedTCodes} />
                        </>
                    } />
                    <Route path="/tcode-manager" element={
                        <>
                            <h1>TCode Manager</h1>
                            <TCodeManager tCodes={tCodes} setTCodes={setTCodes} />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
