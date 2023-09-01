import { useContext } from "react"
import { GetData } from "./StudentUseContext"

function StudentUseContextB(){
    const recieveData = useContext(GetData)
    return(
        <>
            <h3>Student Use Context B</h3>
            <p>{recieveData}</p>
        </>
    )
}
export default StudentUseContextB