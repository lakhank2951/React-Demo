import { useState } from "react";

function UseCustomCounterHook(initialValue = 0) {
    const [ counter, setCount ] = useState(initialValue);

    const increment = ()=> setCount(counter + 1);
    const decrement = () => setCount(counter - 1)
    
    return { counter, increment, decrement }
}

export default UseCustomCounterHook;