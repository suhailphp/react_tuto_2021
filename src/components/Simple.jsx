
import React,{Component } from 'react';
class Simple extends Component {
    render(){
        let {name} = this.props
        return (
            <h1>Hello mr {name}</h1>
        )
    }
}

export default Simple
