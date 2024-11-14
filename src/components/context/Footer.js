import { Button } from "react-bootstrap";
import { CommonContext } from "./CommonContext";

function Footer() {
    return (
        <>
        <CommonContext.Consumer>
            {
                ({color, changeColor}) => (
                    <div style={{ backgroundColor: color, padding: 10 }}>
                    <h2 >Footer</h2>
                    <Button onClick={() => changeColor('Yellow')}>Update Yellow Color</Button>
                    </div>
                )
            }
        </CommonContext.Consumer>
    </>
    );
}

export default Footer;