import Home from "../components/pages/Home";
import Sponsors from "../components/pages/Sponsors";
import Children from "../components/pages/Children";
import Payments from "../components/pages/Payments";
import Add from "../components/pages/Add";
import Saved from "../components/pages/Saved";
import Search from "../components/pages/Search";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/sponsors",
    component: Sponsors,
  },
  {
    path: "/children",
    component: Children,
  },
  {
    path: "/payments",
    component: Payments,
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "/saved",
    component: Saved,
  },
  {
    path: "/search",
    component: Search,
  },
];

export default Routes;
