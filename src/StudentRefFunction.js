import { useEffect, createRef } from "react"

function StudentRefFunction(){
    var getInputRef = createRef()
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
            <h3>Student Ref Function</h3>
            <input type="text" placeholder="Enter Text" ref = {getInputRef} />
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default StudentRefFunction