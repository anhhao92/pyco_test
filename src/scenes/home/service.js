import { restClient } from "../../services/base.service";
import { PAGE_SIZE } from "../../constants";

export function getImages(offset) {
  return restClient({
    url: "https://api.giphy.com/v1/gifs/trending",
    method: "get",
    data: {
      limit: PAGE_SIZE,
      offset
    }
  })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
}
