import React, { useEffect, useState } from 'react'

export default function Signup(){

    const [userList, setUserList] = useState([])

    useEffect(() => {
        var url = 'http://127.0.0.1:8000/api/user-list/'
        fetch(url)
        .then(response => response.json())
        .then(response => setUserList(response))
    },[])

    console.log(userList)

    return(
        <>
            <h1>Testing</h1>
        </>
    )
}