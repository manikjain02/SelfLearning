import { useState } from "react"

function ShowHide(){
    const [state, setState] = useState(false)
    return(
        <>
            <h3>Show Hide Functionality</h3>
            {state?<p>The Manik Jain...</p>:""}
            <button onClick={()=>setState(true)}>Show</button>&nbsp;
            <button onClick={()=>setState(false)}>Hide</button>
        </>
    )
}
export default ShowHide