import { useState } from "react"

function StudentUseState(){
    const [state, setstate] = useState("Manik")
    function myFunc(){
        setstate("Manik Jain")
    }
    return(
        <>
            <h3>Student UseState</h3>
            {state}
            <br />
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default StudentUseState