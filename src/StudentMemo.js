import { useState } from "react"
import StudentMemoData from "./StudentMemoData"

function StudentMemo(){
    const [data, setData] = useState(0)
    const [item, setItem] = useState(["Item 1", "Item 2"])
    function myFunc(){
        setData(data+1)
    }
    return(
        <>
            <h3>Student memo</h3>
            <StudentMemoData passData = {item}/>
            <p>Data: {data}</p>
            <button onClick={()=>myFunc()}>Update</button>
        </>
    )
}
export default StudentMemo