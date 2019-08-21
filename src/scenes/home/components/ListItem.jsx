import { Col, Row } from "antd";
import React from "react";
import Item from "./Item";
import './style.less'

const ListItem = ({ images, openPreview }) => {
  return (
    <div className="homepage">
      <Row gutter={16}>
        {images.map(m => (
          <Col key={m.id} sm={12} md={8} lg={6}>
            <Item openPreview={openPreview} item={m} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListItem;
