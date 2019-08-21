import * as homeActions from "./action";

export const initialState = {
  isLoading: false,
  images: [],
  selectedImage: null,
  error: null
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeActions.GET_IMAGES:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case homeActions.GET_IMAGES_SUCCEED:
      return {
        ...state,
        isLoading: false,
        images: action.payload.data
      };

    case homeActions.GET_IMAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case homeActions.OPEN_PREVIEW:
      return {
        ...state,
        selectedImage: action.payload
      };

    case homeActions.CLOSE_PREVIEW:
      return {
        ...state,
        selectedImage: null
      };

    default:
      return state;
  }
};

export default homeReducer;
