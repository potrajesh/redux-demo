import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectCount } from './CounterSlice';

export function Counter() {
  const count = useSelector(selectCount); // Use selector to get count
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
         +
        </button>
        <span>{count}</span> {/* Display the count */}
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
}
