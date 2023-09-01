import { Component } from "react";

class StudentComponentWillUnmount extends Component{
    componentWillUnmount(){
        console.log("ComponentWillUnmount is Working")
    }
    render(){
        return(
            <>
                <h3>Student Component Will Unmount</h3>
            </>
        )
    }
}
export default StudentComponentWillUnmount