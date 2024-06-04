/*import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;*/

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setNewBudget(value);
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                min="0"
            />
        </div>
    );
};

export default Budget;

