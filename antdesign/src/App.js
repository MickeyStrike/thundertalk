import React from 'react'
import './App.css'
import { Layout, Menu, Breadcrumb, Row } from 'antd';
import 'antd/dist/antd.css'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import useFetcher from './helpers/useFetcher'

import Card from './components/Card'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {

  const { data, loading, error } = useFetcher()

  if(error) return <p>Error Coy ..</p>
  
  console.log(data)

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <UserOutlined />
                      subnav 1
                    </span>
                  }
                >
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <LaptopOutlined />
                      subnav 2
                    </span>
                  }
                >
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <NotificationOutlined />
                      subnav 3
                    </span>
                  }
                >
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {
                  loading ? 
                    <p>loading ...</p> 
                  :
                    <Row>
                      {
                        data.map((movie) => {
                          return <Card title={movie.title} ratings={movie.ratings} image={movie.image} />
                        })
                      }
                    </Row>
                }
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
