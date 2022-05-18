import React, { useState, useEffect } from 'react'
import axios from '../../utils/request'
import { Button, Modal, } from 'antd';
import './award.css'

function Award() {
    const [awardLeft, setAwardLeft] = useState([])
    const [awardCenter, setAwardCenter] = useState([])
    const [awardRight, setAwardRight] = useState([])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        axios.post('/api/award').then(res => {
            const newList = res.data.awardLeftList.sort((a, b) => {
                return b.integral - a.integral
            })
            setAwardLeft(newList)
        })
    }, [])
    useEffect(() => {
        axios.post('/api/award').then(res => {
            const newList = res.data.awardCenterList.sort((a, b) => {
                return b.integral - a.integral
            })
            setAwardCenter(newList)
        })
    }, [])
    useEffect(() => {
        axios.post('/api/award').then(res => {
            const newList = res.data.awardRightList.sort((a, b) => {
                return b.integral - a.integral
            })
            setAwardRight(newList)
        })
    }, [])
    return (
        <div>
            {
                isModalVisible && <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>您的排名为99+，积分为0，请继续努力赚取积分</p>
                </Modal>
            }
            <header>
                <h1>激励榜</h1>
                <p><Button type="primary" onClick={showModal}>查看我的积分</Button></p>
            </header>
            <main className='awardMain'>
                <div className='award'>
                    {
                        awardLeft && awardLeft.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} alt='' />
                                    <span>{item.name}</span>
                                    <p>积分:{item.integral}</p>
                                    <p style={{ color: 'red' }}>Top{index + 1}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='award'>
                    {
                        awardCenter && awardCenter.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} alt='' />
                                    <span>{item.name}</span>
                                    <p>积分:{item.integral}</p>

                                    <p style={{ color: 'red' }}>Top{index + 1}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='award'>
                    {
                        awardRight && awardRight.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} alt='' />
                                    <span>{item.name}</span>
                                    <p>积分:{item.integral}</p>

                                    <p style={{ color: 'red' }}>Top{index + 1}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default Award