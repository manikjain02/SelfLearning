import { useState } from "react"
import { useEffect } from "react"

function StudentAPITable(){
    const [arrayItem, setArrayItem] = useState()
    async function FetchAPI(){
        const api = "https://jsonplaceholder.typicode.com/users"
        const fetchApi = await fetch(api)
        const awaitedResult = fetchApi.json()
        awaitedResult.then((getResult)=>{
            setArrayItem(getResult)
        })
    }
    useEffect(()=>{
        FetchAPI()
    }, [])
    return(
        <>
            <h3>Student API Table</h3>
            <table border="1px" align="center">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan="6">Address</th>
                </tr>
                {
                    arrayItem?.map((itemList)=>{
                        return(
                            <>
                                <tr>
                                    <td>{itemList.id}</td>
                                    <td>{itemList.name}</td>
                                    <td>{itemList.email}</td>
                                    <td>{itemList.address.street}</td>
                                    <td>{itemList.address.suite}</td>
                                    <td>{itemList.address.city}</td>
                                    <td>{itemList.address.zipcode}</td>
                                    <td>{itemList.address.geo.lat}</td>
                                    <td>{itemList.address.geo.lng}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}
export default StudentAPITable