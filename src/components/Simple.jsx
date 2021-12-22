
import React,{Component } from 'react';
class Simple extends Component {
    render(){
        let {name} = this.props
        return (
            <div>
                <h1>Hello mr {name}</h1>
                <button>hello</button>
            </div>

        )
    }
}

export default Simple
