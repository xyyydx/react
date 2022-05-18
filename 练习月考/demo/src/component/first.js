import React, { useState, useEffect } from 'react'
import axios from '../utils/reqson'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { Form, Input, Button, Checkbox } from 'antd';
import { Alert } from 'antd';

function First() {

    const [sure, setSure] = useState(false)
    const [no, setNo] = useState(false)
    const jump = useNavigate()

    const onFinish = debounce((values) => {
        axios.post('/api/login', {
            username: values.username,
            password: values.password,
        }).then(res => {
            if (res.code === 200) {
                setSure(true)
                setTimeout(() => {
                    setSure(false)
                }, 2000);
                localStorage.setItem('token', 'xy?id=179521')
                jump('/wife')
            } else {
                setNo(true)
                setTimeout(() => {
                    setNo(false)
                }, 2000);
            }
        })

    }, 500);

    return (
        <>
            {sure && <Alert
                message="Success Tips"
                type="success"
                showIcon
                action={
                    <Button size="small" type="text">
                        UNDO
                    </Button>
                }
                closable
                banner={false}
            />}
            {
                no && <Alert type="error" message="Error text" banner />
            }
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 7 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                style={{
                    marginTop: '200px'
                }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 9, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 9, span: 50 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default First