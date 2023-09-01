import "./para.css"
import style from "./CustomDesign.module.css"
function StudentStyleComponent(){
    return(
        <>
            <h3>Student Style Component</h3>
            <p style = {{color: "red", backgroundColor: "blue"}}>This is Inline CSS in ReactJS</p>
            <p className="para">This is an Example of External CSS in ReactJS</p>
            <p className={style.para1}>This is an Example of Module CSS in ReactJS</p>
        </>
    )
}
export default StudentStyleComponent