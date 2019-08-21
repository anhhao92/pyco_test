import { Icon } from "antd";
import React from "react";

const Item = ({ item, openPreview }) => {
  const { user } = item;

  return (
    <div className="item">
      <div className="item__body">
        <div onClick={() => openPreview(item)} className="item__thumbnail-container">
          <img alt="thumbnail" className="item__thumbnail" src={item.images["480w_still"].url} />
        </div>
        <div className="item__info">
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            <Icon type="link" />
          </a>
          <Icon type="heart" theme="filled" />
        </div>
      </div>
      <div className="item__footer">
        {user && <img alt="avt" className="item__footer-thumbnail" src={user.avatar_url} />}
        <span className="item__footer-author">{item.username || "-"}</span>
      </div>
    </div>
  );
};

export default Item;
