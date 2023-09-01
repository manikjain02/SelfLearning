import { useEffect, useState } from "react"

function ReactJSLifeCycleFunction(){
    // useEffect(()=>{
    //     console.log("useEffect is working")
    // }, [])
    const [state, setState] = useState("Manik")
    useEffect(()=>{
        console.log("componentDidUpdate is working")
    }, [state])
    function myFunc(){
        // alert("myFunc is working")
        setState("Manik Jain")
    }
    return(
        <>
            <h3>ReactJS LifeCycle Function</h3>
            <p>Data: {state}</p>
            <button onClick={()=>myFunc()}>Update</button>
        </>
    )
}
export default ReactJSLifeCycleFunction