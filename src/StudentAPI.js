import { useState } from "react"
import { useEffect } from "react"

function StudentAPI(){
    const [arrayItem, setArrayItem] = useState([])
    async function fetchAPI(){
        const api = "https://jsonplaceholder.typicode.com/users"
        const fetchApi = await fetch(api)
        const awaitedResult = fetchApi.json()
        awaitedResult.then((getResult)=>{
            console.log(getResult)
            setArrayItem(getResult)
        })
        // console.log(awaitedResult)
    }
    useEffect(()=>{
        fetchAPI()
    }, [])
    return(
        <>
            <h3>Student API Data</h3>
            {
                arrayItem.map((itemList)=>{
                    return(
                        <>
                            <p>{itemList.id}. {itemList.name}-{itemList.address.street}-{itemList.address.city}</p>
                        </>
                    )
                })
            }
        </>
    )
}
export default StudentAPI