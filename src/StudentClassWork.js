import { useState } from "react"
import { useEffect } from "react"

function StudentClassWork(){
    const [arrayItem, setArrayItem] = useState([])
    async function FetchAPI(){
        const getAPIData = "https://jsonplaceholder.typicode.com/users"
        const awaitData = await fetch(getAPIData)
        const getReadableStream = awaitData.json()
        // console.log(getReadableStream)
        getReadableStream.then((getData)=>{
            console.log(getData)
            setArrayItem(getData)
        })
    }
    useEffect(()=>{
        FetchAPI()
    }, [])
    return(
        <>
            <h3>Student Class Work</h3>
            {
                arrayItem?.map((itemList, getIndex)=>{
                    return (
                        <>
                            <p>{itemList.name}</p>
                        </>
                    )
                })
            }
        </>
    )
}
export default StudentClassWork