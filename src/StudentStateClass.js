import React from 'react';
class StudentStateClass extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Manik"
        }
    }
    myFunc(){
        alert("myFunc is Working")
        this.setState({name:"Manik Jain"})
    }
    render(){
        return(
            <>
                <h3>Student State Class</h3>
                {this.state.name}
                <br />
                <button onClick={()=>this.myFunc()}>Submit</button>
            </>
        )
    }
}
export default StudentStateClass;