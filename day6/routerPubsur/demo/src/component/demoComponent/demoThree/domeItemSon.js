import React, { Component, createContext } from 'react'
import PubSub from 'pubsub-js'
import { MyContext } from '../../../MyContext/MyContext'

export default class DomeItemSon extends Component {
    static contextType = MyContext
    render() {
        // console.log(this)
        return (
            <div>DomeItemSon跨级传参
                接收跨级的pubsub参数
                <MyContext.Consumer>
                    {
                        (value) => {
                            console.log(value)
                        }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
    componentDidMount() {
        PubSub.subscribe('send', (name, data) => {
            console.log(data)
        })
    }
}
