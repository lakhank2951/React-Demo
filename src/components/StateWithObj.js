import { useState } from "react";
import { Button } from "react-bootstrap";

function StateWithObj() {
    let [user, setUser] = useState({
        name: 'Lakhan',
        age: 29
    })

    return (
        <>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <Button onClick={() => setUser({...user, name: 'Manoj'})} >Update State </Button>
        </>
    )
}

export default StateWithObj;