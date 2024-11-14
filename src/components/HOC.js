import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
function HOC() {
    return (
        <>
            <h1>HOC </h1>
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
        </>
    );
}
function HOCRed(props) {
    return <h2 style={{ backgroundColor: 'red', width: 100 }}>Red<props.cmp /></h2>
}
function HOCGreen(props) {
    return <h2 style={{ backgroundColor: 'green', width: 100 }}>Grren<props.cmp /></h2>
}
function Counter() {
    const [count, setCount] = useState(0)
    return <div className='justify-content-center'>
        <h3>{count}</h3>
        <Button onClick={() => setCount(count + 1)}>Update</Button>
    </div>
}

export default HOC;