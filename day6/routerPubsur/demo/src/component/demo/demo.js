import React, { Component, createContext } from 'react'
import axios from '../../utils/request'
import './demo.css'
import { Route, Link, Redirect, NavLink } from 'react-router-dom'

import First from '../demoComponent/demoRouter/first'
import Shop from '../demoComponent/demoRouter/shop'
import Cookie from '../demoComponent/demoRouter/cookie'

export const MyContext = createContext()

export default class demo extends Component {
    constructor() {
        super()
        this.state = {
            id: 1
        }
    }
    render() {
        const { RouterList } = this.props

        return (
            <div className='demo'>
                <header>header</header>
                <main>
                    {/* <Route path="/first" component={First}></Route>
                    <Route path="/shop/:id" component={Shop}></Route>
                    <Route path="/cookie" component={Cookie}></Route>
                    <Route path="/my" component={My}></Route>
                    <Redirect to={'/first'} /> */}
                    {
                        RouterList.map(item => {
                            if (item.isRedirect) {
                                return <Redirect key={item.isRedirect} to={item.path} />
                            } else {
                                return (
                                    <Route key={item.path} path={item.path} component={item.component}></Route>
                                )
                            }
                        })
                    }
                </main>
                <footer>
                    <Link to={'/first'}>first</Link>
                    <Link to={'/shop'}>shop</Link>
                    <Link to={'/cookie'}>cookie</Link>
                    <NavLink activeStyle={{ color: 'blue' }} to={'/my'}>my</NavLink>
                </footer>
            </div>
        )
    }
}