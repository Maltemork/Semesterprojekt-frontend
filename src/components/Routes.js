import Redirect from "../components/pages/Redirect";
import Sponsors from "../components/pages/Sponsors";
import Children from "../components/pages/Children";
import Payments from "../components/pages/Payments";
import Add from "../components/pages/Add";
import Saved from "../components/pages/Saved";
import Search from "../components/pages/Search";

const AppRoutes = [
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
  {
    path: "/",
    Element: Redirect
  },
];

export default AppRoutes;
