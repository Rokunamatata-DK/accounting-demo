import React, { useState, useEffect } from 'react';

function TrialBalance() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCredits, setTotalCredits] = useState(0);
    const [totalDebits, setTotalDebits] = useState(0);

    // const formatDate = (dateString) => {
    //     const [year, month, day] = dateString.split('-');
    //     return `${day}/${month}/${year}`;
    // };

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
                        </tr>
                    ))}
                    <tr>
                        <th>Total Credits:</th>
                        <td colSpan="5">{totalCredits}</td>
                    </tr>
                    <tr>
                        <th>Total Debits:</th>
                        <td colSpan="5">{totalDebits}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TrialBalance;
