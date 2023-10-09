import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrialBalance = () => {
    const [trialBalanceData, setTrialBalanceData] = useState({ trialBalance: {}, Total_Debits: 0, Total_Credits: 0 });
    const [tcodes, setTcodes] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    function process_data(transactions) {
        let debit = 0;
        let credit = 0;
        transactions.forEach(transaction => {
            const amount = parseInt(transaction.Amount * 100);
            if (amount > 0) {
                credit += amount;
            } else {
                debit += Math.abs(amount);
            }
        });

        return [parseFloat(debit / 100).toFixed(2), parseFloat(credit / 100).toFixed(2)];
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const tcodesResponse = await axios.get('http://localhost:5000/tcodes');
                setTcodes(tcodesResponse.data);
                console.log(tcodesResponse.data); // Log the fetched tcodes data

                const trialBalanceResponse = await axios.post('http://localhost:5000/trial_balance', null);
                setTrialBalanceData(trialBalanceResponse.data);
                console.log(trialBalanceResponse.data.trialBalance); // Log the fetched trial balance data

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="ContentContainer">
            <h2>Trial Balance</h2>
            <table>
                <thead>
                    <tr>
                        <th>Account Code</th>
                        <th>Account Name</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        {/* <th>Original Balance</th>
                        <th>Variance</th> */}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(trialBalanceData.trialBalance).map(([tcode, transactions]) => {
                        const [debit, credit] = process_data(transactions);
                        return (
                            <tr key={tcode}>
                                <td>{tcode}</td>
                                <td>{tcode === "" ? "No Tcode assigned" : tcodes[tcode].description}</td>
                                <td>{debit}</td>
                                <td>{credit}</td>
                            </tr>
                        );


                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td><strong>Total Debits:</strong> {trialBalanceData.Total_Debits.toFixed(2)}</td>
                        <td><strong>Total Credits:</strong> {trialBalanceData.Total_Credits.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default TrialBalance;
