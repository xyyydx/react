import React, { useContext, useEffect } from 'react'
import { MyContext } from '../App'
import PubSub from 'pubsub-js'



export default function Son() {

    const value = useContext(MyContext)

    useEffect(() => {
        PubSub.subscribe('send', (_, data) => {
            console.log(data)
        })
    }, [])

    return (
        <div>son</div>
    )
}

