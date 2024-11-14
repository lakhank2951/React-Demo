import { Button } from "react-bootstrap";
function Lifting(props) {
    return(
        <>
            <h2>Lifting State Up</h2>

            <Button onClick={() => props.updateParentTitle('Child Lift Up')}>Update Parent Title</Button>
        </>
    )
}

export default Lifting;