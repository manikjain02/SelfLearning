import { useState } from "react"

function StudentFormUG2(){
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Mobile, setMobile] = useState()
    const [Course, setCourse] = useState()
    function getDetails(e){
        // console.log(e.preventDefault())
        console.log(Name, Email, Mobile, Course)
        return e.preventDefault()
    }
    return(
        <>
            <h3>Form Structure</h3>
            <form onSubmit={getDetails}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br />
                <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br />
                <input type="number" placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/><br />
                <select onChange={(e)=>setCourse(e.target.value)}>
                    <option>--Select Course--</option>
                    <option>JavaScript</option>
                    <option>React JS</option>
                    <option>Node JS/Express JS</option>
                    <option>MongoDb</option>
                </select><br />
                <input type="Submit"/><br />
            </form>
        </>
    )
}
export default StudentFormUG2