import { useState } from "react"
import StudentChildComponent from "./StudentChildComponent"

function StudentParentComponent(){
    const [state, setstate] = useState("Manik")
    function myFunc(){
        setstate("Manik Jain")
    }
    return(
        <>
            <h3>Student Parent Component</h3>
            <StudentChildComponent studentName = {state}/>
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default StudentParentComponent