import { Component } from "react";
import StudentComponentWillUnmount from "./StudentComponentWillUnmount";

class ReactJSLifeCycleClass extends Component{
    constructor(){
        super()
        console.log("Constructor is Working")
        /*
        this.state = {
            // name: "Manik",        // Example 1
            count: 0
        }
        */
        this.state = {
            showData: true
        }
    }
    componentDidMount(){
        console.log("ComponentDidMount is Working")
    }
    /*
    componentDidUpdate(preProps, preState, snapShot){
        console.log("ComponentDidUpdate is Working")
        console.log("Previous State", preState)
        console.log("Previous State", preState.count)
        if(preState.count == this.state.count){
            alert("Already Exist")
        }
    }
    */
    componentDidUpdate(){
        /*
        if(this.state.count > 4){
            this.setState({count: this.state.count+1})
        }
        */
    }
    shouldComponentUpdate(){
        return true
    }
    /*
    // Example 1
    getUpdate(){
        this.setState({name:"Manik Jain"})
    }
    */
   getUpdate(){
        this.setState({showData: !this.state.showData})
    }
    render(){
        console.log("Render is Working")
        return(
            <>
                <h3>ReactJS Life Cycle Class</h3>
                {/* <p>Name: {this.state.name}</p>  //Example 1*/}
                {/* <p>Count Data: {this.state.count}</p> */}
                {/* <button onClick={()=>this.setState({name:"Manik Jain"})}>Update</button>  //Example 1  */}
                {this.state.showData ? <StudentComponentWillUnmount /> : "Unmounting Successful "}
                <button onClick={()=>this.getUpdate()}>Update</button>
            </>
        )
    }
}
export default ReactJSLifeCycleClass