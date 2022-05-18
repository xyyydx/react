import React, { Component } from 'react'
import store from '../../model2/store'
import { data } from '../../model2/action'

export default class shop extends Component {
    constructor() {
        super()
        this.state = {
            list: store.getState().list,
            value: ''
        }
    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.changeIpt(e)} />
                <button onClick={() => this.ClickBtn()}>发送</button>
                {
                    this.state.list.length > 0 && this.state.list.map(v => {
                        return (
                            <div key={`set_${v}`}>{v}</div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount() {
        store.subscribe(() => {
            const { list } = store.getState()
            this.setState({
                list
            })
        })
    }
    changeIpt = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    ClickBtn = () => {
        const { list } = this.state
        list.push(this.state.value)
        store.dispatch(data(list))
        // this.setState({
        //     list: store.getState.list
        // })
    }
}
