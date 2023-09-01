import { createContext } from "react"
import StudentUseContextB from "./StudentUseContextB"
import StudentUseContextA from "./StudentUseContextA"

const GetData = createContext()
console.log("GetData: ", GetData)
export default function StudentUseContext(){
    return(
        <>
            <h3>Student Use Context</h3>
            <StudentUseContextA />
            <GetData.Provider value="Manik Jain">
                <StudentUseContextB />
            </GetData.Provider>
        </>
    )
}
export {GetData}