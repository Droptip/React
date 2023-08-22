import React, { useState } from 'react';

function CashMachine () {
    const [balance, setBalance] = useState(2000);

    const addAmount = (amount) => {
        setBalance(balance + amount);
    };

    const withdrawAmount = (amount) => {
        if (balance >= amount) {
            setBalance(balance - amount);
        } else {
            alert ('Not enough money');
        }
    };

    const withdrawAll = () => {
        setBalance(0);
    }

    return (
        <div>
            <h2> Balance: ${balance}</h2>
            <button onClick={() => addAmount(500)}>Add 500</button>
            <button onClick={() => withdrawAmount(500)}>Withdraw 500</button>
            <button onClick={withdrawAll}>Withdraw All</button>
        </div>
    );
}

export default CashMachine