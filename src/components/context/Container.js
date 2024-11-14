import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {CommonContext} from './CommonContext'
function Container() {
    const [color, setColor] = useState('lightblue');

    function changeColor(color) {
        setColor(color)
    }

    return(
        <>  
            <CommonContext.Provider value={{color, changeColor}}>
                <Header />
                <div style={{backgroundColor: color, padding: 10, marginTop: 10, marginBottom: 10}}>Main Container Component</div>
                <Footer />
            </CommonContext.Provider>
        </>

    )
}

export default Container;