import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
function StudentReactRouting(){
    return(
        <>
            <h3>Student React Routing</h3>
            <Router>
                {/* <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul> */}
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element = {<Home/>}></Route>
                    <Route path="/about" element = {<About/>}></Route>
                    <Route path="/contact" element = {<Contact/>}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default StudentReactRouting