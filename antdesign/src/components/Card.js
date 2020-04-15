import React from 'react'
import { Card, Col, Row, Button } from 'antd';
import { StarFilled, PlusOutlined } from '@ant-design/icons';

const { Meta } = Card

export default function CardComponent(props) {

  const { title, ratings, image } = props

  return (
    <>
      <Col span={6}>
        <Card
          hoverable
          style={{ width: 240, marginBottom: 10 }}
          cover={<img alt="example" src={image} />}
        >
          <Meta
            title={
            <>
              <Row>
                <Col>
                  <StarFilled style={{marginRight: '10px'}} />
                </Col>
                <Col>
                  <p>{ratings}</p>
                </Col>
              </Row>
            </>}
            description={
            <>
              <p>{title}</p>
              <Button style={{marginBottom: '2%', width: '99%', textAlign: 'center'}}>
                <PlusOutlined />Watchlist
              </Button>
            </>} />
        </Card>
      </Col>
    </>
  )
}
