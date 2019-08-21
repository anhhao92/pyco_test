export const GET_IMAGES = "home/GET_IMAGES";
export const GET_IMAGES_SUCCEED = "home/GET_IMAGES_SUCCEED";
export const GET_IMAGES_FAILED = "home/GET_IMAGES_FAILED";

export const OPEN_PREVIEW = "home/OPEN_PREVIEW";
export const CLOSE_PREVIEW = "home/CLOSE_PREVIEW";

export function openPreview(payload) {
  return {
    type: OPEN_PREVIEW,
    payload
  };
}

export function closePreview() {
  return {
    type: CLOSE_PREVIEW
  };
}

export function getImages() {
  return {
    type: GET_IMAGES
  };
}

export function getImagesSucceed(payload) {
  return {
    type: GET_IMAGES_SUCCEED,
    payload
  };
}

export function getImagesFailed(error) {
  return {
    type: GET_IMAGES_FAILED,
    error
  };
}
