import { useEffect, useRef } from "react";

function PreviousProp(props) {
    const lastVal = useRef();

    useEffect(() => {
        lastVal.current = props.count
    })

    return (
        <>
            <h1>Previous Props</h1>
            <h2>Current Value: {props.count}</h2>
            <h2>Previous Value: {lastVal.current}</h2>
        </>
    )
}

export default PreviousProp;