import React, { useState } from 'react'

function Auth() {

    const [ fName, setFname ] = useState("")
    const [ lName, setLname ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    console.log(fName)

    return (
        <>
        <input type="text" id='fName' value={fName} onChange={e => setFname(e.target.value)} placeholder='Enter name' />
        </>
    )
}

export default Auth