import { useState } from "react";
import { Button } from "react-bootstrap";
function Form() {
    const [name, setName] = useState("");
    const [interest, setInterest] = useState("");
    const [tnc, setTnc] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    function getFormData(e) {
        e.preventDefault()
        setIsSubmit(true)
        console.log(name, interest, tnc)
    }
    return (
        <div className="App">
            <h1>Form</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <br/><br/>
                <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <br/><br/>

                <input type="checkbox" value={tnc} onChange={(e) => setTnc(e.target.checked)} /> Terms & conditions
                <br/><br/>
                <Button type="submit">Submit</Button>
            </form>
            {   
                isSubmit ? 
                <div>
                    
                    <h4>Form Data</h4> 
                    <span>Name: {name}</span> <br />
                    <span>Interest: {interest}</span>  <br />
                    <span>Term & Conditions: {tnc ? 'True' : 'False'}</span> 
                </div> : ''
            }
        </div>
    );

}

export default Form;