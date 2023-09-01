import { useRef, useEffect } from "react"

function StudentUseRef(){
    var getInputRef = useRef()
    function myFunc(){
        console.log("getInputRef: ", getInputRef)
        console.log("getInputRef: ", getInputRef.current.value)
        getInputRef.current.style.color = 'red'
        getInputRef.current.style.backgroundColor = 'yellow'
        getInputRef.current.focus()
    }
    useEffect(()=>{
        getInputRef.current.value = 5
    })
    return(
        <>
            <h3>Student Use Ref</h3>
            <input type="text" placeholder="Enter Data" ref={getInputRef} />
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default StudentUseRef