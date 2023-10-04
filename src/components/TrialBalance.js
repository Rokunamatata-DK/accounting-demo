import React, { useState, useEffect } from 'react';

function TrialBalance() {
    const [data, setData] = useState([]);
    const [accountTypes, setAccountTypes] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filter, setFilter] = useState('');
    const [selectedAccountTypes, setSelectedAccountTypes] = useState({});
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [ytdTotalRevenue, setYtdTotalRevenue] = useState(0);
    const [ytdTotalExpenses, setYtdTotalExpenses] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setData(data.trialBalance);
                setFilteredData(data.trialBalance);
                setAccountTypes(data.accountTypes);

                const initialSelection = {};
                data.accountTypes.forEach(type => initialSelection[type] = true);
                setSelectedAccountTypes(initialSelection);

                const revenue = data.trialBalance.reduce((sum, item) => sum + (item.credit || 0), 0);
                const expenses = data.trialBalance.reduce((sum, item) => sum + (item.debit || 0), 0);
                const ytdRevenue = data.trialBalance.reduce((sum, item) => sum + (item.ytdCredit || 0), 0);
                const ytdExpenses = data.trialBalance.reduce((sum, item) => sum + (item.ytdDebit || 0), 0);

                setTotalRevenue(revenue);
                setTotalExpenses(expenses);
                setYtdTotalRevenue(ytdRevenue);
                setYtdTotalExpenses(ytdExpenses);
            })
            .catch(error => {
                setError(error.toString());
            });
    }, []);

    useEffect(() => {
        const results = data.filter(item => {
            const matchText = filter ? item.account.toLowerCase().includes(filter.toLowerCase()) : true;
            const matchCheckbox = selectedAccountTypes[item.account];
            return matchText && matchCheckbox;
        });
        setFilteredData(results);
    }, [filter, selectedAccountTypes, data]);

    const selectAll = () => {
        const allSelected = {};
        accountTypes.forEach(type => allSelected[type] = true);
        setSelectedAccountTypes(allSelected);
    };

    const unselectAll = () => {
        setSelectedAccountTypes({});
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <input type="text" placeholder="Search by account" onChange={e => setFilter(e.target.value)} />

            {accountTypes.map(type => (
                <label key={type}>
                    <input
                        type="checkbox"
                        checked={!!selectedAccountTypes[type]}
                        onChange={() => setSelectedAccountTypes(prev => ({ ...prev, [type]: !prev[type] }))}
                    />
                    {type}
                </label>
            ))}

            <button onClick={selectAll}>Select All</button>
            <button onClick={unselectAll}>Unselect All</button>

            <table>
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>YTD Debit</th>
                        <th>YTD Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.account}</td>
                            <td>{item.debit}</td>
                            <td>{item.credit}</td>
                            <td>{item.ytdDebit}</td>
                            <td>{item.ytdCredit}</td>
                        </tr>
                    ))}
                    <tr>
                        <th>Total Revenue:</th>
                        <td></td>
                        <td>{totalRevenue}</td>
                        <td></td>
                        <td>{ytdTotalRevenue}</td>
                    </tr>
                    <tr>
                        <th>Total Expenses:</th>
                        <td>{totalExpenses}</td>
                        <td></td>
                        <td>{ytdTotalExpenses}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Profit/Loss:</th>
                        <td colSpan="2">{totalRevenue - totalExpenses}</td>
                        <td colSpan="2">{ytdTotalRevenue - ytdTotalExpenses}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TrialBalance;
