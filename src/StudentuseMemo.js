import { useMemo, useState } from "react"

function StudentuseMemo(){
    const [count, setCount] = useState(0)
    const [data, setData] = useState(1)
    function updateCountFunc(){
        console.log("updateCountFunc is working")
        setCount(count+1)
    }
    function updateDataFunc(){
        console.log("updateDataFunc is working")
        setData(data+1)
    }
    /*
    function mainFunc(){
        console.log("mainFunc is working")
        return data+10
    }
    */
    const mainFunc = useMemo(()=>{
        console.log("mainFunc is working")
        return data+10
    }, [data])
    return(
        <>
            <h3>Student useMemo</h3>
            <p>Count: {count}</p>
            <p>Data: {data}</p>
            <p>{mainFunc}</p>
            <button onClick={()=>updateCountFunc()}>Update Count</button>&nbsp;
            <button onClick={()=>updateDataFunc()}>Update Data</button>
        </>
    )
}
export default StudentuseMemo