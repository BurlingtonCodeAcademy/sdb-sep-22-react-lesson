import React, { useState } from "react";

import "./welcome.css"

function Welcome(props) {
    
    function removeName() {
        const updatedNames = props.allNames.filter(name => name !== props.name)
        props.updateNames(updatedNames)
    }
    return (
        <div onClick={removeName}>
            <h1>Welcome, {props.name}</h1>
        </div>
    )
}

export default Welcome