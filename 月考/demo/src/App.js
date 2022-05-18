import './App.css';
import React, { Suspense } from 'react';
// 使用路由表
import { useRoutes, Link } from 'react-router-dom'
// 路由表
import routes from './route/route'
// Layout布局
import { Layout, Menu } from 'antd';
// 加载中得样式
import { Loading } from 'tdesign-react';
// icon图标
import { AppstoreOutlined, BarChartOutlined, CloudOutlined, TeamOutlined } from '@ant-design/icons';
// 标签
const { Header, Content, Footer, Sider } = Layout;
// 侧边栏内容路由
const items = [
  {
    to: '/wish',
    name: '心愿墙',
    icon: CloudOutlined,
  },
  {
    to: '/friend',
    name: '找伙伴',
    icon: AppstoreOutlined,
  },
  {
    to: '/say',
    name: '讨论角',
    icon: BarChartOutlined,
  },
  {
    to: '/award',
    name: '激励榜',
    icon: TeamOutlined,
  }].map((item, index) => ({
    key: String(index + 1),
    icon: React.createElement(item.icon),
    label: <Link to={item.to}>{item.name}</Link>,
  }));

function App() {
  // 使用路由表
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Layout hasSider>

        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
        </Sider>

        <Layout className="site-layout" style={{ marginLeft: 200 }}>

          <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* 头部 */}
          </Header>

          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              {/* 路由显示 */}
              <Suspense fallback={<div style={{ width: '100%', height: '100%', position: 'relative' }}><Loading style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} loading={true} text="拼命加载中..." size="small"></Loading></div>}>
                {element}
              </Suspense>
            </div>
          </Content>
          {/* 尾部内容 */}
          <Footer style={{ textAlign: 'center', color: 'slateblue' }}>This is LZQ Month examination</Footer>

        </Layout>

      </Layout>
    </div>
  );
}

export default App;
