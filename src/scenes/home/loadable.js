import Loadable from "../../components/loadable/Loadable";

export default Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./index")
});
