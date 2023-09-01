import { memo } from "react"

function StudentUseCallbackWithMemo(props){
    console.log("StudentUseCallbackWithMemo is working")
    console.log(props)
    return(
        <>
            <h3>Student useCallback With Memo</h3>
            {props.passItem.map((getItem, getIndex)=>{
                return <p key={getIndex}>{getItem}</p>
            })}
            <button onClick={()=>props.passAddToCart()}>Add To Cart</button>
        </>
    )
}
export default memo(StudentUseCallbackWithMemo)