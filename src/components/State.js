import { useState } from "react"
import { Button } from "react-bootstrap";

function State() {
    let [data, setData] = useState('State - Functional Component');

    function Private() {
        return <h1>Private Child Component Inside State Component</h1>
    }
    
    function changeStateValue() {
        setData('State - Functional Component Using State');
        alert(data);
    }

    return (
        <div>
            <h1>{data}</h1>
            <Button onClick={changeStateValue}>Click to Change State</Button>
            <Private />
        </div>
    ) 
}

export default State;