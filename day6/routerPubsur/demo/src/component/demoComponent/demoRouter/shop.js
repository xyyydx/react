import React, { Component, createContext } from 'react'
import ShopItem from '../demoTwo/shopItem'
import { MyContext } from '../../../MyContext/MyContext'

export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            id: 333
        }
    }

    render() {
        return (
            <div>
                Shop
                <MyContext.Provider value={{ id: this.state.id, shop: 2 }}>
                    <ShopItem />
                </MyContext.Provider>
            </div>
        )
    }
}