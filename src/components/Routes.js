import Home from "../components/pages/Home";
import Sponsors from "../components/pages/Sponsors";
import Children from "../components/pages/Children";
import Payments from "../components/pages/Payments";
import Add from "../components/pages/Add";
import Saved from "../components/pages/Saved";
import Search from "../components/pages/Search";

const AppRoutes = [
  {
    path: "/",
    exact: true,
    Element: Home,
  },
  {
    path: "/sponsors",
    Element: Sponsors,
  },
  {
    path: "/children",
    Element: Children,
  },
  {
    path: "/payments",
    Element: Payments,
  },
  {
    path: "/add",
    Element: Add,
  },
  {
    path: "/saved",
    Element: Saved,
  },
  {
    path: "/search",
    Element: Search,
  },
];

export default AppRoutes;
