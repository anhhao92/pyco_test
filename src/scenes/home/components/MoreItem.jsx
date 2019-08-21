import React from "react";
import { Button } from "antd";

const MoreItem = ({ page, getImages }) => (
  <div className="more-button">
      <Button 
        onClick={() => getImages(page + 1)} 
        type="primary" 
        shape="circle" 
        icon="down" 
        size="large" 
      />
  </div>
);
export default MoreItem;
