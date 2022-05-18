import React, { useState, useEffect, useRef, useContext } from 'react'
import Son from './son'
import { MyContext } from '../App'
import PubSub from 'pubsub-js'

function Hooks(props) {

    const [value, setValue] = useState('value')

    const { num } = props

    const Ref = useRef()

    const context = useContext(MyContext)

    console.log(context)

    //useEffect 
    // 相当于DidMount()
    // 相当于Didupdata()
    // 相当于willUnmont() 

    // num改变之后让他做一些动作
    useEffect((e) => {

        // 销毁
        return () => {

        }
    }, [num])

    return (
        <div>
            <p>Hooks:{value}</p>
            <button ref={Ref} onClick={() => {
                setValue("1")
                PubSub.publish('send', {
                    title: 1
                })
            }}>
                点击变更
            </button>
            <Son />
        </div>
    )

}

export default Hooks
