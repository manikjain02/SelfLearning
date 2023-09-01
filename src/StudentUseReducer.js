import { useReducer } from "react"

const initialState = 0
const Reducer = (state, action)=>{
    switch(action){
        case "add":
            return state+1;
        case "sub":
            return state-1;
        case "reset":
            return state=0
        default: return "Wrong Choice"
    }
}
function StudentUseReducer(){
    const [count, dispatch] = useReducer(Reducer, initialState)
    return(
        <>
            <h3>Student useReducer</h3>
            <p>Count: {count}</p>
            <button onClick={()=>dispatch("add")}>Add</button>&nbsp;
            <button onClick={()=>dispatch("sub")}>Subtract</button>&nbsp;
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </>
    )
}
export default StudentUseReducer