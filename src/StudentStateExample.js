import { useState } from "react"

function StudentStateExample(){
    const [state, setState] = useState(0)
    function inc(){
        setState(state+1)
    }
    function dec(){
        setState(state-1)
    }
    return(
        <>
            <h3>Student State Example</h3>
            <p>Count: {state}</p>
            <button onClick={()=>inc()}>Increment</button>&nbsp;
            <button onClick={()=>dec()}>Decrement</button>
        </>
    )
}
export default StudentStateExample