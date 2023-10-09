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
        <div className="ContentContainer">
            <h2>TCode Manager</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {/* <ul>
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
            </ul> */}
            <table className="CenterTable">
                <thead>
                    <tr>
                        <th>Tcode</th>
                        <th>Description</th>
                        <th>Account Numbers</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tcodes).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value.description}</td>
                            <td>
                                <ul>
                                    {value.account_numbers.map((account, index) => (
                                        <li key={index}>
                                            {account}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="tcode-title">Add Tcode</h3>
            <div className="input-wrapper">
                <label className="input-label">
                    Tcode:
                    <input className="input-field" value={tcodeInput} onChange={(e) => setTcodeInput(e.target.value)} />
                </label>
            </div>
            <div className="input-wrapper">
                <label className="input-label">
                    Description:
                    <input className="input-field" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                </label>
            </div>
            <div className="input-wrapper">
                <label className="input-label">
                    Account Numbers (comma separated):
                    <input className="input-field" value={accountNumbersInput} onChange={(e) => setAccountNumbersInput(e.target.value)} />
                </label>
            </div>
            <button className="button" onClick={addTcode}>Add</button>
        </div>
    );
};

export default TCodeManager;
