import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=> {
        let login = localStorage.getItem('token');
        
        console.log('login', login)
        if(!login) {
            navigate('/')
        }
    }, [])
    return(
        <>
            <h1>Protected Route</h1>
            <Component />
        </>
    )
}

export default Protected;