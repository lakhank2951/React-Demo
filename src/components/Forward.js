import { forwardRef } from "react";

function Forward(props, ref) {
    return( 
        <>
            <h1>Forward Ref</h1>
            <input type="text" ref={ref}/>
        </>
    )
}

export default forwardRef(Forward);