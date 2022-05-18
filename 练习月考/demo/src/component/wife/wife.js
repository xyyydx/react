import React from 'react'
import Hoc from '../HOC/hoc'
import { Link, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { StarOutlined, RocketOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const link = [
    {
        name: '你是我的梦',
        icon: RocketOutlined,
        to: '/wife/unripe'
    },
    {
        name: '你喜欢黑丝吗',
        icon: StarOutlined,
        to: '/wife/over'
    }
]

function Wife() {
    return (
        <>
            <Layout style={{
                width: '100%',
                height: '100%'
            }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={link.map(
                            (item, index) => ({
                                key: String(index + 1),
                                icon: React.createElement(item.icon),
                                label: <Link to={item.to}>{item.name}</Link>,
                            }),
                        )}
                    />
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Hoc(Wife)