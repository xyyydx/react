import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd';
import { uniqueId } from 'lodash'
const { TextArea } = Input;

function WishAlert(props) {
    const [title, setTitle] = useState('')
    const handChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    return (
        <>
            <Modal title="Basic Modal" visible={props.isModalVisible} onOk={() => props.handleOk({ name: '未登录', id: uniqueId(Math.random()), title: title, img: 'http://dummyimage.com/30x30/79dcf2&text=匿名', time: '刚刚' })} onCancel={props.handleCancel}>
                <TextArea rows={4} placeholder="maxLength is 30" maxLength={30} onChange={handChange} />
            </Modal>
        </>
    )
}

export default WishAlert