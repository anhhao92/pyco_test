import { Skeleton, Col, Row } from 'antd'
import React from 'react'

const getSkeletonList = (initValue = 16) => {
  const result = []
  for (let i = 0; i < initValue; i++) {
    result.push(
      <Col key={i} sm={12} md={8} lg={6}>
        <Skeleton active />
      </Col>,
    )
  }
  return result
}

const LoadingSkeleton = () => {
  const SkeletonList = React.useMemo(getSkeletonList, [getSkeletonList])
  return <Row gutter={16}>{SkeletonList}</Row>
}
export default LoadingSkeleton
