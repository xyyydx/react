import React, { Component } from 'react'

const Hoc = (WillComponent) => {
    return class DemoChild extends Component {
        state = {
            x: null,
            y: null
        }
        render() {
            const { x, y } = this.state
            return (
                <WillComponent x={x} y={y} />
            )
        }
        componentDidMount() {
            window.addEventListener('mousemove', (e) => {
                this.setState({
                    x: e.clientX,
                    y: e.clientY
                })
            })
        }
    }
}

export default Hoc
