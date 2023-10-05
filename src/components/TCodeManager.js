import React, { useState } from 'react';


function TCodeManager({ tCodes, setTCodes }) {
    const [newTCode, setNewTCode] = useState('');

    const addTCode = () => {
        if (newTCode && !tCodes.includes(parseInt(newTCode))) {
            setTCodes([...tCodes, parseInt(newTCode)].sort((a, b) => a - b));
            setNewTCode('');
        }
    };

    const removeTCode = (code) => {
        if (window.confirm(`Are you sure you want to remove T code ${code}?`)) {
            setTCodes(tCodes.filter(t => t !== code));
        }
    };

    const groupedTCodes = tCodes.reduce((acc, code) => {
        const group = Math.floor(code / 100) * 100;
        if (!acc[group]) acc[group] = [];
        acc[group].push(code);
        return acc;
    }, {});

    return (
        <div>
            <h2>Manage T Codes</h2>
            <div>
                <input 
                    type="number" 
                    value={newTCode} 
                    onChange={e => setNewTCode(e.target.value)} 
                    placeholder="Enter new T code" 
                />
                <button onClick={addTCode}>Add T Code</button>
            </div>
            {Object.entries(groupedTCodes).map(([group, codes]) => (
                <div key={group}>
                    <h3>Group: {group}</h3>
                    <ul>
                        {codes.map(code => (
                            <li key={code}>
                                {code}
                                <button onClick={() => removeTCode(code)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TCodeManager;
