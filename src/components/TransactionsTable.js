import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch transactions data from the API when component mounts
        axios.get('http://localhost:5000/transaction')
            .then(response => {
                setTransactions(response.data.transications);
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    }, []); // The empty dependency array ensures this useEffect runs only once, similar to componentDidMount()

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Details</th>
                    <th>Particulars</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Tcode</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.index}>
                        <td>{transaction.Date}</td>
                        <td>{transaction.Details}</td>
                        <td>{transaction.Particulars}</td>
                        <td>{transaction.Type}</td>
                        <td>{transaction.Amount}</td>
                        <td>{transaction.Tcode}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionsTable;
