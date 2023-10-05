import React, { useState, useEffect } from 'react';
import { getTCodes } from './TCodeManager';


function TCodeAssign() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCredits, setTotalCredits] = useState(0);
    const [totalDebits, setTotalDebits] = useState(0);
    const [tCodeAssignments, setTCodeAssignments] = useState({}); // New state for T code assignments

    const tCodes = getTCodes(); // Assuming TCodeManager has a getTCodes function

    const fetchData = () => {
        const endpointUrl = "http://127.0.0.1:5000/trial_balance";

        const headers = {
            "Content-Type": "application/json",
            "start": startDate,
            "end": endDate
        };

        fetch(endpointUrl, {
            method: "POST",
            headers: headers
        })
            .then(response => response.json())
            .then(data => {
                setData(data.trialBalance);
                setTotalCredits(data.Total_Credits);
                setTotalDebits(data.Total_Debits);
            })
            .catch(error => {
                setError(error.toString());
            });
    };

    const handleTCodeChange = (index, selectedTCode) => {
        setTCodeAssignments(prevState => ({
            ...prevState,
            [index]: selectedTCode
        }));
    };

    useEffect(() => {
        fetchData();
    }, [startDate, endDate]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <label>
                Start Date:
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </label>

            <label>
                End Date:
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </label>

            <button onClick={fetchData}>Fetch Data</button>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Details</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Code</th>
                        <th>Reference</th>
                        <th>T Code</th> {/* New column header */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Date}</td>
                            <td>{item.Details}</td>
                            <td>{item.Type}</td>
                            <td>{item.Amount}</td>
                            <td>{item.Code}</td>
                            <td>{item.Reference}</td>
                            <td>
                                <select
                                    value={tCodeAssignments[index] || ''}
                                    onChange={e => handleTCodeChange(index, e.target.value)}
                                >
                                    <option value="">Select T Code</option>
                                    {tCodes.map(tCode => (
                                        <option key={tCode} value={tCode}>{tCode}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th>Total Credits:</th>
                        <td colSpan="6">{totalCredits}</td>
                    </tr>
                    <tr>
                        <th>Total Debits:</th>
                        <td colSpan="6">{totalDebits}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TCodeAssign;
