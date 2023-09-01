import StudentChildPassData from "./StudentChildPassData"

function StudentChildPassDataParent(){
    function myFunc(getData){
        console.log("myFunc is Working")
        alert(getData)
    }
    return(
        <>
            <h3>Student Child Pass Data Parent</h3>
            <StudentChildPassData myFuncData = {myFunc} />
        </>
    )
}
export default StudentChildPassDataParent