import { useState } from "react"

function StudentForm(){
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Mobile, setMobile] = useState()
    const [Course, setCourse] = useState()
    return(
        <>
            <h3>Form Structure</h3>
            {Name}&nbsp;{Email}&nbsp;{Mobile}&nbsp;{Course}
            <form>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br />
                <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br />
                <input type="number" placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/><br />
                <select onChange={(e)=>setCourse(e.target.value)}>
                    <option>--Select Course--</option>
                    <option>JavaScript</option>
                    <option>React JS</option>
                    <option>Node JS/Express JS</option>
                    <option>MongoDB</option>
                </select><br />
                <input type="Submit"/>
            </form>
        </>
    )
}
export default StudentForm