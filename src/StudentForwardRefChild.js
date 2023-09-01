import { forwardRef } from "react"

function StudentForwardRefChild(props, ref){
    console.log("getRef: ", ref)
    // console.log("getProps: ", props)
    return(
        <>
            <h3>Student Forward Ref Child</h3>
        </>
    )
}
export default forwardRef(StudentForwardRefChild)