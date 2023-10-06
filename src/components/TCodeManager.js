import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TCodeManager.css';  // import the CSS file if you have one

const TCodeManager = () => {
    const [tcodes, setTcodes] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [tcodeInput, setTcodeInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [accountNumbersInput, setAccountNumbersInput] = useState('');

    useEffect(() => {
        fetchTcodes();
    }, []);

    const fetchTcodes = () => {
        axios.get('http://localhost:5000/tcodes')
            .then(response => {
                setTcodes(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    const addTcode = () => {
        const accountNumbers = accountNumbersInput.split(',').map(item => item.trim());
        axios.post('http://localhost:5000/tcode', {
            tcode: tcodeInput,
            description: descriptionInput,
            account_numbers: accountNumbers
        })
            .then(response => {
                fetchTcodes();  // refetch the tcodes after adding
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div className="container">
            <h2>Tcodes</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {Object.entries(tcodes).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value.description}
                        <ul>
                            {value.account_numbers.map((account, index) => (
                                <li key={index}>
                                    {account}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h3>Add Tcode</h3>
            <div>
                <label>
                    Tcode:
                    <input value={tcodeInput} onChange={(e) => setTcodeInput(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <input value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Account Numbers (comma separated):
                    <input value={accountNumbersInput} onChange={(e) => setAccountNumbersInput(e.target.value)} />
                </label>
            </div>
            <button onClick={addTcode}>Add</button>
        </div>
    );
};

export default TCodeManager;
