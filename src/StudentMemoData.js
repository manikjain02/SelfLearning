import { memo } from "react"
function StudentMemoData(props){
    console.log("Props Data: ",props.passData)
    return(
        <>
            <h3>Student Memo Data</h3>
            {props.passData.map((getItem, index)=>{
                return <p key={index}>{getItem}</p>
            })}
        </>
    )
}
export default memo(StudentMemoData)