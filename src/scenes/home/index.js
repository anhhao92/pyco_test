import React from "react";
import { Empty } from "antd";
import { connect } from "react-redux";
import { getImages, openPreview, closePreview } from "./action";
import { getImagesSelector, getLoadingSelector, getSelectedImageSelector } from "./selector";
import Loading from "../../components/loading/Loading";
import ListItem from "./components/ListItem";
import PreviewItem from "./components/PreviewItem";

const HomePage = ({ images, selectedImage, loading, getImages, openPreview, closePreview }) => {
  React.useEffect(() => {
    getImages();
  }, []);

  if (loading) return <Loading />;
  if (images.length === 0) return <Empty />;
  return (
    <>
      <ListItem openPreview={openPreview} images={images} />
      {selectedImage && <PreviewItem item={selectedImage} closePreview={closePreview} />}
    </>
  );
};

const mapStateToProps = state => ({
  images: getImagesSelector(state),
  selectedImage: getSelectedImageSelector(state),
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
