import React from "react";

const PreviewItem = ({ item, closePreview }) => (
  <div onClick={() => closePreview()} className="backdrop">
    <img className="backdrop__image" alt={item.title} src={item.images.original.url} />
  </div>
);
export default PreviewItem;
