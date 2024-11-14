import React, { useState, useMemo } from 'react';
import { Button } from 'react-bootstrap';
function Memo() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // Using useMemo to memoize an expensive calculation
    const expensiveCalculation = useMemo(() => {
        console.log("Performing expensive calculation...");
        return count * 2; // Example calculation
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Calculated Value: {expensiveCalculation}</h2>
            <Button onClick={() => setCount(count + 1)}>Increment Count</Button>&nbsp;
            <Button onClick={() => setOtherState(!otherState)}>Toggle Other State</Button>
        </div>
    );
};

export default Memo;
