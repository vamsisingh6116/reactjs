import React, { Component } from 'react'

export default class States extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Vamsi"
        }
    }
    
    render() {

        setTimeout(()=> {
            this.setState({name:"VAMSI SINGH"})
        },2000)
        return (
            <div>
               <h1>
                   {this.state.name}
                   </h1> 
            </div>
        )
    }
}
