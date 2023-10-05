import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrialBalance from './components/TrialBalance';
import TCodeAssign from './components/TCodeAssign';
import TCodeManager from './components/TCodeManager'; // Import the new component

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
                        <li>
                            <Link to="/tcode-manager">TCode Manager</Link> {/* Add a link to the new page */}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<><h1>TCode Assign Page</h1><TCodeAssign /></>} />
                    <Route path="/trial-balance" element={<><h1>Trial Balance</h1><TrialBalance /></>} />
                    <Route path="/tcode-manager" element={<><h1>TCode Manager</h1><TCodeManager /></>} /> {/* Add a route for the new page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
