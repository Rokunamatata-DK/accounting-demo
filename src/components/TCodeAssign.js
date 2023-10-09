import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TCodeAssign = () => {
    // const [file, setFile] = useState(null);
    var file = null;
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
        file = e.target.files[0];
    };

    const onUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/upload', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error uploading CSV:", error);
            });
        axios.get('http://localhost:5000/transaction')
            .then(response => {
                setTransactions(response.data.transications);
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    };

    const Scan = () => {

        axios.get('http://localhost:5000/scan')
            .then(response => {
                axios.get('http://localhost:5000/transaction')
                    .then(response => {
                        setTransactions(response.data.transications);
                    })
                    .catch(error => {
                        console.error("Error fetching transactions:", error);
                    });
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    };

    const handleTCodeChange = (e, index) => {
        // const updatedTransactions = [...transactions];
        // updatedTransactions[index].Tcode = e.target.value;

        // setTransactions(updatedTransactions);

        axios.post('http://localhost:5000/setTcode', null, {
            headers: {
                'index': transactions[index].index,
                'tcode': e.target.value
            }
        })
            .then(response => {
                console.log(response.data.message);
                axios.get('http://localhost:5000/transaction')
                    .then(response => {
                        setTransactions(response.data.transications);
                    })
                    .catch(error => {
                        console.error("Error fetching transactions:", error);
                    });
            })
            .catch(error => {
                console.error("Error setting Tcode:", error);
            });
    };

    const updateTCodePerference = (e, index) => {

        if (transactions[index].Tcode !== "") {
            var tcode = tcodes[transactions[index].Tcode];
            var update_account_numbers = tcode.account_numbers.slice();
            console.log(transactions[index])


            update_account_numbers.push(transactions[index].Details)
            // console.log(updateTcode)


            var body = {
                "tcode": transactions[index].Tcode, "description": tcode.description, "account_numbers": update_account_numbers
            }
            console.log(body)
            axios.post('http://localhost:5000/tcode', body)
                .then(response => {
                    console.log(response.data.message);
                })
                .catch(error => {
                    console.error("Error setting Tcode:", error);
                });

        }
        // updatedTransactions[index].Tcode = e.target.value;

        // const updateTcode = tcodes[0];
        // updateTcode.account_numbers.append(transactions[index].Details);
        // axios.post('http://localhost:5000/tcode', {
        //     "tcode": updateTcode., "description": "Sport expences", "account_numbers": ["Phoebe", "Basketball Ben"]
        // })
        //     .then(response => {
        //         console.log(response.data.message);
        //     })
        //     .catch(error => {
        //         console.error("Error setting Tcode:", error);
        //     });
    };

    return (
        <div className="ContentContainer">
            <h2>Transaction</h2>
            <input type="file" onChange={onFileChange} />
            <button onClick={onUpload}>Upload</button>

            {transactions.length > 0 && (
                <div><button onClick={Scan}>Scan</button>
                    <table className="CenterTable">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Details</th>
                                <th>Amount</th>
                                <th>TCode</th>
                                <th>memorise</th>
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
                                    <td><button onClick={(e) => updateTCodePerference(e, index)}>Set TCode Perference</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TCodeAssign;
