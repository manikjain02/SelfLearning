import {Component} from "react"
class StudentPropsClass extends Component{
    render(){
        // console.log(this.props)
        return (
            <>
                {this.props.studentName}
                <br />
                {this.props.studentMobile}
                <h3>Student Props Class</h3>
            </>
        )
    }
}
export default StudentPropsClass