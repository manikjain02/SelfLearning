import { useState } from "react"

function CountParent(){
    const [state, setstate] = useState(0)
    function myFunc(){
        setstate(state+1)
    }
    return(
        <>
            <h3>Count Parent</h3>
            <p>Count: {state}</p>
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default CountParent