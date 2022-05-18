import React, { useEffect, useState } from 'react'
import axios from '../../utils/request'
import Hoc from '../Hoc/hoc'
import { HeartFilled } from '@ant-design/icons';

function Say(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.post('/api/say').then(res => {
            console.log(res)
            setData(res.data)
        })
    }, [])
    return (
        <>
            <header style={{ background: 'white', padding: '20px' }}>
                <h1>
                    <HeartFilled />讨论角
                </h1>
                <p>欢迎实时交流，探讨问题，共同进步！</p>
            </header>
            <main style={{ padding: '20px', background: 'white', marginTop: '20px' }}>
                <h2 style={{ borderBottom: '1px solid #ccc', padding: '10px 0', fontWeight: 'bold' }}>历史消息</h2>
                {
                    data.length > 0 && data.map(item => {
                        return (
                            <div style={{ marginTop: '40px' }} key={item.id}>
                                <img src={item.img} alt='' style={{ borderRadius: '50%' }} />
                                <span>{item.name}</span>
                                <span style={{ color: '#ccc', marginLeft: '20px' }}>{item.time}</span>
                                <p style={{ fontSize: '16px', marginTop: '10px' }}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default Hoc(Say)