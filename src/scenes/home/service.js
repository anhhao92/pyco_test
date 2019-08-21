import { restClient } from "../../services/base.service";

export function getImages(limit = 20) {
  return restClient({
    url: "https://api.giphy.com/v1/gifs/trending",
    method: "get",
    data: {
      limit: limit,
      offset: Math.floor(Math.random() * 10000) // randomly select item in range [0, 10000]
    }
  })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
}
