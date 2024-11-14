import { useState } from "react"
function Controlled() {
    let [val, setVal] = useState("");
    return(
        <>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        </>
    )   

}

export default Controlled