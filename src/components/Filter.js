import { useSearchParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();

    const age = searchParams.get('age');
    const id = searchParams.get('id');

    const navigate = useNavigate();

    const location = useLocation();
    location.state = {id: 1}

    return(
        <>
            <h1>Filters:</h1>
            <h2>Age: {age}</h2>
            <h2>ID: {id}</h2>
            <Button onClick={() => setSearchParams({age: 30, id: 2})}>Set Age & ID in Query Params</Button><br /><br />
            <Button onClick={() => navigate('/')}>Goto Main</Button>
        </>
    )
}

export default Filter;