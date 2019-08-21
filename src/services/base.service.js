import axios from "axios";
import Qs from "qs";

export function restClient(body) {
  const key = process.env.REACT_APP_API_KEY;
  return axios.request({
    ...body,
    paramsSerializer: function(params) {
      return Qs.stringify(params, { arrayFormat: "brackets" });
    },
    params: {
      ...body.data,
      api_key: key
    }
  });
}
