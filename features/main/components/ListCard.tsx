import { Col, Row } from 'antd'
import React from 'react'
import Card from './ImageCard'

const ListCard = ({ images, openPreview }) => {
  return (
    // <div className="homepage">
    <Row gutter={16}>
      {images.data.map((m) => (
        <Col key={m.id} sm={12} md={8} lg={6}>
          <Card openPreview={openPreview} item={m} />
        </Col>
      ))}
    </Row>
    // </div>
  )
}

export default ListCard
