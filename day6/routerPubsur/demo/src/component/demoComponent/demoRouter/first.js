import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from '../../../utils/request'
import Left from '../demoRouterChild/left'
import Right from '../demoRouterChild/right'
import '../../../mock/data'

export default class First extends Component {
    constructor() {
        super()
        this.state = {
            id: 1,
            list: [],
            index: 0,
            isShow: false,
            listPush: []
        }
    }
    componentDidMount() {
        axios.get('/api/list').then(res => {
            this.setState({
                list: res.data.data
            })
        })
    }
    render() {
        const { id, list, index } = this.state
        return (
            <div className='first'>
                <button onClick={() => this.props.history.push({ pathname: '/my', state: 111 })}>跳My 传id</button>
                <button onClick={() => this.props.history.push(`/cookie?id=${this.state.id}`)}>跳cookie 传id</button>
                <button onClick={() => this.props.history.push(`/shop/${id}`)}>跳shop 传id</button>
                <button onClick={() => this.props.history.push("/first/left")}>二级路由left</button>
                <button onClick={() => this.props.history.push("/first/right")}>二级路由right</button>
                <Route path="/first/left" component={Left}></Route>
                <Route path="/first/right" component={Right}></Route>
                <div>
                    {
                        list.map((i, v) => {
                            return (
                                <div style={{ border: '1px solid #ccc' }} onClick={() => this.setState({ index: v })}>
                                    {i.name}
                                </div>
                            )
                        })
                    }
                    {
                        this.state.list.length > 0 && this.state.list[index].children.map(v => {
                            return (
                                <div key={v.id} onClick={() => { this.delHandClick(v) }}>
                                    <img src={v.img} alt="" />
                                    <p>{v.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    delHandClick = (e) => {
        const { list, index, listPush } = this.state
        list[index].children.splice(list[index].children.findIndex((item) => {
            return item.id === e.id
        }), 1)
        if (listPush.some(item => item.id === e.id)) {
            listPush.splice(listPush.findIndex(i => i.id === e.id), 1)
        } else {
            listPush.push(e)
        }
        console.log(listPush)
        this.setState({
            listPush: listPush
        }, () => {
            console.log(listPush)
        })
    }
    componentDidUpdate(nextProps, nextState) {
        if (this.state.list !== nextState.list) {
            this.setState({
                isShow: true
            })
        }
    }
}
