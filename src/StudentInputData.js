import { useState } from "react"

function StudentInputData(){
    const [state, setstate] = useState(false)
    function onChangeData(e){
        // console.log("data", e.target.value)
        setstate(e.target.value)
    }
    return(
        <>
            <h3>Student Input Data</h3>
            {state?<p>Data: {state}</p>:""}
            <input type="text" placeholder="Please Input Data" onChange={(e)=>onChangeData(e)}/>
        </>
    )
}
export default StudentInputData