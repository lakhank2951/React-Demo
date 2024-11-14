import { useRef } from "react"
import { Button } from "react-bootstrap";

function Uncontrolled() {
    let inputRef = useRef(null);

    function updateInput(e) {
        e.preventDefault();
        console.log(inputRef.current.value)
    }

    return(
        <>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={updateInput}>
                <input type="text" ref={inputRef} />&nbsp;

                <Button type="submit">Update Input</Button>
            </form>
        </>
    )   

}

export default Uncontrolled