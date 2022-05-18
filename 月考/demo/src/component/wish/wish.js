import React, { useEffect, useState } from 'react'
// AJAX
import axios from '../../utils/request';
// 发送到redux
import { connect } from 'react-redux'
// redux去合并得数据
import { asyncAction } from '../../redux/action'
// 样式
import './wish.css'
// icon图标
import { HeartFilled } from '@ant-design/icons';
// 标签
import { Button, Input } from 'antd';
// tde的标签
import { Loading } from 'tdesign-react';
// 弹窗组件
import WishAlert from './wishAlert';

function Wish(props) {
    // 数据容器
    const [data, setData] = useState([])
    // 请求等待
    const [load, setLoad] = useState(false)
    // ipt容器
    const [searchIpt, setSearchIpt] = useState('')
    // 弹窗组件是否关闭
    const [isModalVisible, setIsModalVisible] = useState(false);
    // 请求数据
    useEffect(() => {
        // 加载中
        setLoad(true)
        props.asyncMethods(asyncAction())
    }, [])
    // // 把数据存到容器中
    useEffect(() => {
        setData(props.data)
        // 解除加载
        setTimeout(() => {
            setLoad(false)
        }, 1000);
    }, [props])
    // 搜索的数据
    const searchChange = (e) => {
        setSearchIpt(e.target.value)
    }
    // 点击搜索
    const searchClick = () => {
        if (searchIpt !== '') {
            axios.post('/api/search', {
                search: searchIpt
            }).then(res => {
                setData(res.data)
            })
        }
        else props.asyncMethods(asyncAction())
    }
    // 许愿按钮
    const wishClick = () => {
        setIsModalVisible(true)
    }
    // 添加按钮的弹窗按钮-----------------------------------------------------
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (value) => {
        setIsModalVisible(false);
        data.unshift(value)
        setData(data)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // 弹窗传过来要添加的愿望
    const wishAlertProps = (value) => {

    }
    // 添加按钮的弹窗按钮-----------------------------------------------------
    return (
        <>
            {/* 弹窗组件 */}
            <WishAlert isModalVisible={isModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} />
            <header>
                <HeartFilled style={{ color: 'orangered', fontSize: '20px' }} />
                <span style={{ fontSize: '20px' }} >心愿墙</span>
                <p>找不到资源就许个愿吧</p>
                <Button type="primary" danger onClick={wishClick}>
                    <HeartFilled style={{ color: 'red' }} />许个愿吧
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
            <main className='wishMain'>
                <Loading
                    indicator
                    loading={load}
                    preventScrollThrough
                    fullscreen
                    showOverlay
                    delay={5000}
                />
                {
                    data.length > 0 && data.map(item => {
                        return (
                            <div className='wishItem' key={item.id}>
                                <div>
                                    <img src={item.img} alt='' style={{ borderRadius: '50%' }} />
                                    <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{item.name} 的心愿</span>
                                </div>
                                <div style={{ marginLeft: '40px', marginTop: '15px', color: '#ccc' }}>
                                    {item.title}
                                </div>
                                <div style={{ marginLeft: '40px', marginTop: '15px' }}>
                                    发布时间: {item.time}天前
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        asyncMethods: (actions) => {
            dispatch(actions)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wish)