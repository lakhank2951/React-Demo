import { useState } from "react";
import { Button } from "react-bootstrap";

function Props(props) {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function dynamicData(event) {
        setData(event.target.value)
    }
    return(
        <div>
            <h1>Prop Component - {props.title}</h1>
            <h2>Props Email: {props.email}</h2>
            {
                print ? <h3> Dynamic Input: {data} </h3> : null 
            }
            <input type='text' onChange={dynamicData} />&nbsp;
            <Button onClick={() => setPrint(!print) }>
                {
                    !print ? 'Show' : 'Hide'
                }
            </Button>
        </div>
    )
}

export default Props;
