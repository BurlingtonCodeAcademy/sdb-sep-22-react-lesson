import React, { useState } from "react";

import "./welcome.css"

function Welcome() {

    // [ State Variable, Function to update it ] = useState("initial_state")
    let [ name, setName ] = useState("Paul")


    return (
        <>
        <h1 className="header">Welcome to my first component, {name}</h1>
        </>
    )
}

export default Welcome