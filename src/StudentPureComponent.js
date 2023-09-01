import { Component, PureComponent } from "react";

class StudentPureComponent extends PureComponent{
    constructor(){
        super()
        this.state = {
            dataState: 0
        }
    }
    myFunc(){
        this.setState({dataState: 1})
    }
    render(){
        console.log("render is working")
        return(
            <>
                <h3>Student PureComponent</h3>
                <p>Data: {this.state.dataState}</p>
                <button onClick={()=>this.myFunc()}>Submit</button>
            </>
        )
    }
}
export default StudentPureComponent