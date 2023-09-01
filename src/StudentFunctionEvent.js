function StudentFunctionEvent(){
    function myFunc(){
        alert("myFunc is Working")
    }
    return(
        <>
            <h3>Student Function Event</h3>
            <button onClick={()=>myFunc()}>Submit</button>
        </>
    )
}
export default StudentFunctionEvent