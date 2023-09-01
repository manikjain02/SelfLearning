import { Component, createRef } from "react";

class StudentRefClass extends Component{
    constructor(){
        super()
        this.getInputRef = createRef()
    }
    myFunc(){
        console.log("this.getInputRef: ", this.getInputRef)
        console.log("this.getInputRef: ", this.getInputRef.current.value)
        this.getInputRef.current.style.color = 'red'
        this.getInputRef.current.style.backgroundColor = 'yellow'
        this.getInputRef.current.focus()
    }
    componentDidMount(){
        this.getInputRef.current.value = 5
    }
    render(){
        return(
            <>
                <h3>Student Ref Class</h3>
                <input type="text" placeholder="Enter Text" ref={this.getInputRef} /><br />
                <button onClick={()=>this.myFunc()}>Submit</button>
            </>
        )
    }
}
export default StudentRefClass