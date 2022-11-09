import React, { useState } from "react"

class ClassExample extends React.Component {
    constructor(props) {
        super(props)

        this.state = {value: "some value"}
    }

    render() {
        return (
            <h1>Hello from class component {this.state.value}</h1>
        )
    }
}

export default ClassExample

