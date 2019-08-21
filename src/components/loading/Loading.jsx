import { Spin } from "antd";
import * as React from "react";
import "./style.less";

const Loading = () => (
  <div className="lazy-loading">
    <Spin size="large" />
  </div>
);

export default Loading;
