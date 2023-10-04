// src/App.js
import React from 'react';
import './App.css';
import TrialBalance from './components/TrialBalance';
import ButtonComponent from './components/ButtonComponent';

function App() {
    return (
        <div className="App">
            <h1>Trial Balance</h1>
            <TrialBalance />
            <ButtonComponent />
        </div>
    );
}

export default App;
