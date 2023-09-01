import { useRef } from "react"
import StudentForwardRefChild from "./StudentForwardRefChild"

function StudentForwardRefParent(){
    var getRefData = useRef()
    function myFunc(){
        console.log(getRefData)
        getRefData.current.value = 5
        console.log(getRefData.current.value)
    }
    return(
        <>
            <h3>Student Forward Ref Parent</h3>
            <input type="text" placeholder="Enter Text" ref={getRefData} />
            <button onClick={()=>myFunc()}>Submit</button>
            <StudentForwardRefChild ref = {getRefData}/>
        </>
    )
}
export default StudentForwardRefParent