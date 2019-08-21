import Loadable from "react-loadable";
import Loading from "../loading/Loading";

export default function LoadableHOC(opts) {
  return Loadable({
    loading: Loading,
    timeout: 10000,
    ...opts
  });
}
