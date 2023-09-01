function StudentChildPassData(props){
    var a = "Manik Jain"
    // console.log(props.myFuncData())
    return(
        <>
            {/* <p>{props.myFuncData}</p> */}
            <h3>Student Child Pass Data</h3>
            <button onClick={()=>props.myFuncData(a)}>Submit</button>
        </>
    )
}
export default StudentChildPassData