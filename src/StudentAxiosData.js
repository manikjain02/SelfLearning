import axios from "axios"
import { useEffect, useState } from "react"

function StudentAxiosData(){
    const [itemArr, setItemArr] = useState([])
    async function getAPI(){
        try{
            const getAxiosAPI = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log("getAxiosAPI: ", getAxiosAPI.data)
            setItemArr(getAxiosAPI.data)
        }catch{
            console.log("Please refresh your page")
        }
    }
    useEffect(()=>{
        getAPI()
    }, [])
    return(
        <>
            <h3>Student Axios Data</h3>
            <table border="1px">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                {
                    itemArr?.map((getItem, getIndex)=>{
                        return (
                            <>
                                <tr>
                                    <td key={getIndex}>{getItem.id}</td>
                                    <td >{getItem.name}</td>
                                    <td>{getItem.email}</td>
                                    <td>{getItem.address.city}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}
export default StudentAxiosData