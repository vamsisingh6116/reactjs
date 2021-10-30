import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render(props) {
        return (
            <div>
            <h1>Corporationbank account for {this.props.info.Lastname}</h1>
            </div>
        )
    }
}
