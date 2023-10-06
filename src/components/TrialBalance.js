import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrialBalance = () => {
    const [trialBalanceData, setTrialBalanceData] = useState({ trialBalance: {}, Total_Debits: 0, Total_Credits: 0 });

    useEffect(() => {
        // Fetch trial balance data from API
        axios.post('http://localhost:5000/trial_balance', null)
            .then(response => {
                setTrialBalanceData(response.data);
            })
            .catch(error => {
                console.error("Error fetching trial balance data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Trial Balance</h2>
            {Object.entries(trialBalanceData.trialBalance).map(([tcode, transactions]) => (
                <div key={tcode}>
                    <h3>{tcode}</h3>
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
                            <tr>
                                <td>{tcode}</td>
                                <td></td>
                            </tr>
                            {/* {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.Date}</td>
                                    <td>{transaction.Details}</td>
                                    <td>{transaction.Amount}</td>
                                    <td>{transaction.Tcode}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            ))}
            <div>
                <strong>Total Debits:</strong> {trialBalanceData.Total_Debits}
            </div>
            <div>
                <strong>Total Credits:</strong> {trialBalanceData.Total_Credits}
            </div>
        </div>
    );
};

export default TrialBalance;


// import React, { useState, useEffect } from 'react';

// function TrialBalance({ assignedTCodes = {} }) { // Default prop value added
//     const [data, setData] = useState([]);
//     const [accountTypes, setAccountTypes] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [filter, setFilter] = useState('');
//     const [selectedAccountTypes, setSelectedAccountTypes] = useState({});
//     const [totalRevenue, setTotalRevenue] = useState(0);
//     const [totalExpenses, setTotalExpenses] = useState(0);
//     const [ytdTotalRevenue, setYtdTotalRevenue] = useState(0);
//     const [ytdTotalExpenses, setYtdTotalExpenses] = useState(0);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const tCodes = Object.values(assignedTCodes);
//         const uniqueTCodes = [...new Set(tCodes)];
//         setAccountTypes(uniqueTCodes);

//         const initialSelection = {};
//         uniqueTCodes.forEach(type => initialSelection[type] = true);
//         setSelectedAccountTypes(initialSelection);

//         const transactions = Object.entries(assignedTCodes).map(([index, tCode]) => ({
//             ...data[index],
//             tCode
//         }));

//         setData(transactions);

//         const revenue = transactions.reduce((sum, item) => sum + (item.credit || 0), 0);
//         const expenses = transactions.reduce((sum, item) => sum + (item.debit || 0), 0);
//         const ytdRevenue = transactions.reduce((sum, item) => sum + (item.ytdCredit || 0), 0);
//         const ytdExpenses = transactions.reduce((sum, item) => sum + (item.ytdDebit || 0), 0);

//         setTotalRevenue(revenue);
//         setTotalExpenses(expenses);
//         setYtdTotalRevenue(ytdRevenue);
//         setYtdTotalExpenses(ytdExpenses);
//     }, [assignedTCodes]);

//     useEffect(() => {
//         const results = data.filter(item => {
//             const matchText = filter ? item.tCode.toLowerCase().includes(filter.toLowerCase()) : true;
//             const matchCheckbox = selectedAccountTypes[item.tCode];
//             return matchText && matchCheckbox;
//         });
//         setFilteredData(results);
//     }, [filter, selectedAccountTypes, data]);

//     const selectAll = () => {
//         const allSelected = {};
//         accountTypes.forEach(type => allSelected[type] = true);
//         setSelectedAccountTypes(allSelected);
//     };

//     const unselectAll = () => {
//         setSelectedAccountTypes({});
//     };

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <input type="text" placeholder="Search by tCode" onChange={e => setFilter(e.target.value)} />

//             {accountTypes.map(type => (
//                 <label key={type}>
//                     <input
//                         type="checkbox"
//                         checked={!!selectedAccountTypes[type]}
//                         onChange={() => setSelectedAccountTypes(prev => ({ ...prev, [type]: !prev[type] }))}
//                     />
//                     {type}
//                 </label>
//             ))}

//             <button onClick={selectAll}>Select All</button>
//             <button onClick={unselectAll}>Unselect All</button>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>tCode</th>
//                         <th>Debit</th>
//                         <th>Credit</th>
//                         <th>YTD Debit</th>
//                         <th>YTD Credit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredData.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.tCode}</td>
//                             <td>{item.debit}</td>
//                             <td>{item.credit}</td>
//                             <td>{item.ytdDebit}</td>
//                             <td>{item.ytdCredit}</td>
//                         </tr>
//                     ))}
//                     <tr>
//                         <th>Total Revenue:</th>
//                         <td></td>
//                         <td>{totalRevenue}</td>
//                         <td></td>
//                         <td>{ytdTotalRevenue}</td>
//                     </tr>
//                     <tr>
//                         <th>Total Expenses:</th>
//                         <td>{totalExpenses}</td>
//                         <td></td>
//                         <td>{ytdTotalExpenses}</td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <th>Profit/Loss:</th>
//                         <td colSpan="2">{totalRevenue - totalExpenses}</td>
//                         <td colSpan="2">{ytdTotalRevenue - ytdTotalExpenses}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default TrialBalance;
