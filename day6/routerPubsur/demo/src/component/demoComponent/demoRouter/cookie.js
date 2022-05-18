import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Cookie extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.pubsub()}>发布消息到demoitemson</button>
                <button onClick={() => { this.sendMy() }}>发布消息到my</button>
            </div>
        )
    }
    pubsub = () => {
        PubSub.publish('send', { title: '发布消息' })
        this.props.history.push('/shop')
    }
    sendMy = () => {
        PubSub.publish('sendMy', { title: '发布消息My' })
        this.props.history.push('/my')

    }
}