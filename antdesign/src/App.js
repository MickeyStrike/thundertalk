import React from 'react'
import './App.css'
import { Layout, Menu, Row, Col, Skeleton, Card, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

import useFetcher from './helpers/useFetcher'
import CardComponent from './components/Card'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;


function App () {
  
  const SkeletonCard = () => {
    let arr = []
    for (let i = 0; i < 20; i++) {
      arr = [...arr,
        <>
          <Col span={6}>
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
          </Col>
        </>
      ]
    }
    return arr
  }

  const { data, loading, error } = useFetcher()

  
  if(error) return <p>Error cuy ...</p>

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
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
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
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
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
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
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {
                  loading ?
                    <Row>
                      {
                        SkeletonCard()
                      }
                    </Row>
                  :
                  <Row>
                    {
                      data.map((movie,i) => {
                        return <CardComponent key={i} title={movie.title} ratings={movie.ratings} image={movie.image} />
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
  )
}

export default App