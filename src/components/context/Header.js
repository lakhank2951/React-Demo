import { Button } from "react-bootstrap";
import { CommonContext } from "./CommonContext";

function Header() {

    return (
        <>
            <CommonContext.Consumer>
                {
                    ({color, changeColor}) => (
                        <div style={{ backgroundColor: color, padding: 10 }}>
                        <h2 >Header</h2>
                        <Button onClick={() => changeColor('green')}>Update Green Color</Button>
                        </div>
                    )
                }
            </CommonContext.Consumer>
        </>
    )
}

export default Header;