import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd';
import { uniqueId } from 'lodash'
import PropTypes from 'prop-types'
import Friend from './friend';

function FriendAlert(props) {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const contextChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    return (
        <>
            <Modal title="Basic Modal" visible={props.isModalVisible} onOk={() => props.handleOk({ name: name, id: uniqueId(Math.random()), title: title, img: 'http://dummyimage.com/30x30/79dcf2&text=匿名', time: '刚刚' })} onCancel={props.handleCancel}>
                名字： <Input placeholder="Basic usage" style={{ width: '90%' }} onChange={nameChange} />
                内容：<Input placeholder="Basic usage" style={{ width: '90%', marginTop: '20px' }} onChange={contextChange} />
            </Modal>
        </>
    )
}


FriendAlert.propTypes = {
    isModalVisible: PropTypes.bool
}
export default FriendAlert