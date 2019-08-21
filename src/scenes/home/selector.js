import { createSelector } from "reselect";

export const getState = state => state.home;

export const getImagesSelector = createSelector(
  getState,
  state => state.images
);

export const getSelectedImageSelector = createSelector(
  getState,
  state => state.selectedImage
);

export const getLoadingSelector = createSelector(
  getState,
  state => state.isLoading
);
