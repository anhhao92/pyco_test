import { GET_IMAGES, GET_IMAGES_SUCCEED, GET_IMAGES_FAILED } from "../action";
import homeReducer from "../reducer";

const initState = {
  isLoading: false,
  images: [],
  page: 0,
  selectedImage: null,
  error: null
};

const images = [
  {
    id: "5cf093cccff47e0006ec1a60",
    images: "images_2"
  }
];

const response = {
  data: [{ id: "5cf093cccff47e0006ec1a60", images: "images_2" }]
};

describe("reducer", () => {
  it("should handle GET_IMAGES", () => {
    expect(homeReducer({ ...initState }, { type: GET_IMAGES, payload: 0 })).toEqual({
      ...initState,
      page: 0,
      isLoading: true
    });
  });

  it("should handle GET_IMAGES on load more", () => {
    expect(homeReducer({ ...initState }, { type: GET_IMAGES, payload: 10 })).toEqual({
      ...initState,
      page: 10,
      isLoading: true
    });
  });

  it("should handle GET_IMAGES_SUCCEED", () => {
    const actual = homeReducer({ ...initState }, { type: GET_IMAGES_SUCCEED, payload: response });
    const expected = {
      ...initState,
      images: images,
      isLoading: false
    };
    expect(actual).toEqual(expected);
  });

  it("should handle GET_IMAGES_FAILED", () => {
    const error = { message: "Internal Server Error" };
    expect(homeReducer({ ...initState }, { type: GET_IMAGES_FAILED, error })).toEqual({
      ...initState,
      isLoading: false,
      error: error
    });
  });
});
