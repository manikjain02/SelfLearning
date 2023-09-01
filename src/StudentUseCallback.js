import { useCallback, useState } from "react"
import StudentUseCallbackWithMemo from "./StudentUseCallbackWithMemo"

function StudentUseCallback(){
    const [data, setData] = useState(0)
    const [item, setItem] = useState(["item 1", "item 2"])
    function myFunc(){
        setData(data+1)
    }
    const addToCart = useCallback(()=>{
        setItem([...item, "New item added"])
    },[item])
    return(
        <>
            <h3>Student useCallback</h3>
            <StudentUseCallbackWithMemo passItem = {item} passAddToCart = {addToCart} />
            <p>Data: {data}</p>
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default StudentUseCallback