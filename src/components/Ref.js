import { useEffect, useRef }  from 'react';

function Ref() {
    let inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = 100;
    }, [])
    return(
        <>
        <h1>Use Ref </h1>
        <input type='text' ref={inputRef} />

        </>
    )
}

export default Ref;