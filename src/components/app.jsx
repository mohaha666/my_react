import React, { Component } from 'react'
import logo from "../logo.svg"

import "../index.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <img className="logo" src={logo}></img>
                <p className="title">react app 组件</p>
            </div>
        )
    }
}
