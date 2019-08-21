import React from "react";
import { Empty } from "antd";
import { connect } from "react-redux";
import { getImages, openPreview, closePreview } from "./action";
import { getImagesSelector, getLoadingSelector, getSelectedImageSelector, getCurrentPageSelector } from "./selector";
import Loading from "../../components/loading/Loading";
import ListItem from "./components/ListItem";
import PreviewItem from "./components/PreviewItem";
import MoreItem from "./components/MoreItem";

const HomePage = ({ images, selectedImage, loading, page, getImages, openPreview, closePreview }) => {
  React.useEffect(() => {
    getImages();
  }, []);

  if (loading) return <Loading />;
  if (!images.length) return <Empty />;
  return (
    <>
      <ListItem openPreview={openPreview} images={images} />
      <MoreItem page={page} getImages={getImages} />
      {selectedImage && <PreviewItem item={selectedImage} closePreview={closePreview} />}
    </>
  );
};

const mapStateToProps = state => ({
  images: getImagesSelector(state),
  selectedImage: getSelectedImageSelector(state),
  page: getCurrentPageSelector(state),
  loading: getLoadingSelector(state)
});

const mapDispatchToProps = {
  getImages,
  openPreview,
  closePreview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
