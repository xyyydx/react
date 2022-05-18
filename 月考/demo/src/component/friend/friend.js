import React, { useState, useEffect } from 'react'
import axios from '../../utils/request'
import { debounce } from 'lodash'
// icon图标
import { HeartFilled } from '@ant-design/icons';
// 标签
import { Button, Input } from 'antd';
// 样式
import './friend.css'
// 弹窗组件
import FriendAlert from './friendAlert'
import { Buttons, Popconfirm } from 'tdesign-react';
import { BrowseIcon } from 'tdesign-icons-react';


function Friend(props) {
    // 数据容器
    const [data, setData] = useState([])
    // 弹窗组件是否关闭
    const [isModalVisible, setIsModalVisible] = useState(false);
    // ipt容器
    const [searchIpt, setSearchIpt] = useState('')
    // 交朋友按钮
    const wishClick = () => {
        setIsModalVisible(true)
    }
    // 数据
    useEffect(() => {
        axios.post('/api/friend').then(res => {
            setData(res.data)
        })
    }, [])

    // 搜索的数据
    const searchChange = (e) => {
        setSearchIpt(e.target.value)
    }
    // 点击搜索
    const searchClick = debounce(() => {
        if (searchIpt !== '') {
            axios.post('/api/friendSearch', {
                search: searchIpt
            }).then(res => {
                setData(res.data)
            })
        } else {
            axios.post('/api/friend').then(res => {
                setData(res.data)
            })
        }
    }, 600)
    // 点赞
    const goodClick = (item) => {
        console.log(item)
        if (!item.isGood) {
            data.map(v => {
                if (v.id === item.id) {
                    Object.assign(v, { ...item, isGood: true, good: item.good + 1 })
                }
            })
            const newListData = [...data]
            setData(newListData)
        } else {
            data.map(v => {
                if (v.id === item.id) {
                    Object.assign(v, { ...item, isGood: false, good: item.good - 1 })
                }
            })
            const newListData = [...data]
            setData(newListData)
        }
    }
    // 添加按钮的弹窗按钮-----------------------------------------------------
    const showModal = () => {
        setIsModalVisible(true);

    };

    const handleOk = (value) => {
        data.unshift(value)
        setData(data)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // 弹窗传过来要添加的愿望
    const wishAlertProps = (value) => {

    }
    // 添加按钮的弹窗按钮-----------------------------------------------------
    const mounseHove = (e) => {
        console.log(e)
    }
    return (
        <>
            {/* 弹窗组件 */}
            <FriendAlert isModalVisible={isModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} wishAlertProps={wishAlertProps} />
            <header>
                <HeartFilled style={{ color: 'orangered', fontSize: '20px' }} />
                <span style={{ fontSize: '20px', fontWeight: 'bold' }} >找伙伴</span>
                <p>介绍自己，认识更多学编程的朋友，首次填写积分+5</p>
                <Button type="primary" danger onClick={wishClick}>
                    <HeartFilled style={{ color: 'red' }} />填写我的介绍
                </Button>
            </header>
            <div className='search'>
                <div className='searchIpt'>
                    内容:
                    <Input placeholder="Basic usage" onChange={searchChange} />
                    <span>标签:</span>
                    <Input placeholder="Basic usage" />
                </div>
                <div className='searchBtn'>
                    <Button type="primary" onClick={searchClick}>search</Button>
                    <Button style={{ marginLeft: '30px' }}>search reset</Button>
                </div>
            </div>
            <main style={{ marginTop: '20px', padding: '20px', background: 'white' }}>
                {
                    data.length > 0 && data.map(item => {
                        return (
                            <div key={item.id} style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
                                <img src={item.img} alt='' style={{ borderRadius: '50%' }} />
                                <span>{item.title}</span>
                                <p>发布时间：{item.time}天前</p>
                                <p>
                                    <span onClick={() => goodClick(item)}> 赞：👍{item.good}</span>
                                    <Popconfirm content={`你是否要复制${item.name}`}>
                                        <Button theme="primary">交流</Button>
                                    </Popconfirm>
                                </p>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

export default Friend