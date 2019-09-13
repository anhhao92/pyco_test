import React from 'react'
import { Icon } from 'antd'
import {
  ThumbnailContainer,
  Thumbnail,
  ThumbnailInfo,
  CardBody,
  CardFooter,
  AuthorFooter,
  FooterThumbnail,
} from './styles'

const Item = ({ item, openPreview }) => {
  const { user } = item
  return (
    <div className="item">
      <CardBody>
        <ThumbnailContainer onClick={() => openPreview(item)}>
          <Thumbnail alt="thumbnail" src={item.images.downsized_still.url} />
        </ThumbnailContainer>
        <ThumbnailInfo>
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            <Icon type="link" />
          </a>
          <Icon type="heart" theme="filled" />
        </ThumbnailInfo>
      </CardBody>
      <CardFooter>
        {user && <FooterThumbnail alt="avt" src={user.avatar_url} />}
        <AuthorFooter>{item.username || '-'}</AuthorFooter>
      </CardFooter>
    </div>
  )
}

export default Item
