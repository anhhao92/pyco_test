import React from 'react'
import { BackDropContainer, ViewCardBody } from './styles'

const PreviewItem = ({ item, closePreview }) => (
  <BackDropContainer onClick={() => closePreview()}>
    <ViewCardBody alt={item.title} src={item.images.original.url} />
  </BackDropContainer>
)
export default PreviewItem
