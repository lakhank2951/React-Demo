import { useParams } from "react-router-dom";

function Param() {
    const params = useParams();
    const {user, id} = params;

    return(
        <>
            <h1>Params:</h1>
            <h2>User {user} - Id: {id} Page</h2>
        </>
    )
}

export default Param;