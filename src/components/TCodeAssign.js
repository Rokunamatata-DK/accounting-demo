import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TCodeAssign = () => {
    const [file, setFile] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [tcodes, setTcodes] = useState({});

    useEffect(() => {
        // Fetch Tcodes for dropdown
        axios.get('http://localhost:5000/tcodes')
            .then(response => {
                setTcodes(response.data);
            })
            .catch(error => {
                console.error("Error fetching Tcodes:", error);
            });

        // Fetch transactions
        axios.get('http://localhost:5000/transaction')
            .then(response => {
                setTransactions(response.data.transications);
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    }, []);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/upload', formData)
            .then(response => {
                console.log(response.data);
                setTransactions(response.data.transications);
            })
            .catch(error => {
                console.error("Error uploading CSV:", error);
            });
    };

    const handleTCodeChange = (e, index) => {
        const updatedTransactions = [...transactions];
        updatedTransactions[index].Tcode = e.target.value;

        setTransactions(updatedTransactions);

        axios.post('http://localhost:5000/setTcode', null, {
            headers: {
                'index': updatedTransactions[index].index,
                'tcode': e.target.value
            }
        })
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error("Error setting Tcode:", error);
            });
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={onUpload}>Upload</button>

            {transactions.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Details</th>
                            <th>Amount</th>
                            <th>TCode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td>{transaction.Date}</td>
                                <td>{transaction.Details}</td>
                                <td>{transaction.Amount}</td>
                                <td>
                                    <select value={transaction.Tcode} onChange={(e) => handleTCodeChange(e, index)}>
                                        <option value="">Select TCode</option>
                                        {Object.keys(tcodes).map(tcode => (
                                            <option key={tcode} value={tcode}>{tcode}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TCodeAssign;
