import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class My extends Component {
    constructor() {
        super()
        this.state = {
            id: ''
        }
    }
    render() {
        console.log(this)
        const { history: { location: { pathname } } } = this.props
        const spt = pathname.split('=')
        return (
            <div>My</div>
        )
    }
    componentDidMount() {
        PubSub.subscribe('sendMy', (name, data) => {
            console.log(this.state.id)
            this.setState({ id: data.title })
            // console.log(this.state.id)

        })

    }
    componentWillUnmount() {
        // PubSub.unsubscribe('sendMy')
    }
}