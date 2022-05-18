import React, { Component } from 'react'
import { Toast, Button, Field, Form } from 'react-vant';

export default class func extends Component {
    onFinish = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <div className="demo-button">
                    <Button type="primary" onClick={() => Toast({ message: '自定义图标', })}>主要按钮</Button>
                    <Button type="info">信息按钮</Button>
                    <Button type="default">默认按钮</Button>
                    <Button type="warning">警告按钮</Button>
                    <Button type="danger">危险按钮</Button>
                </div>

                <Form
                    // form={form}
                    showValidateMessage={false}
                    onFinish={this.onFinish}
                    footer={
                        <div style={{ margin: '16px 16px 0' }}>
                            <Button round nativeType="submit" type="primary" block>
                                提交
                            </Button>
                        </div>
                    }
                >
                    <Form.Item
                        tooltip={{
                            message:
                                'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
                        }}
                        intro="确保这是唯一的用户名"
                        rules={[{ required: true, message: '请填写用户名' }]}
                        name="username"
                        label="用户名"
                    >
                        <Field placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, message: '请填写密码' }]} name="password" label="密码">
                        <Field placeholder="请输入密码" />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

