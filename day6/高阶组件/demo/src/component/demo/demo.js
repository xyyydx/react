import React, { Component } from 'react'
import Hoc from '../demoChild/demoChild'

class Demo extends Component {
    render() {
        return (
            <div>Demo</div>
        )
    }
}

export default Hoc(Demo)
