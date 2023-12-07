import Redirect from "../components/pages/Redirect";
import Sponsors from "../components/pages/Sponsors";
import Children from "../components/pages/Children";
import Payments from "../components/pages/Payments";
import Add from "../components/pages/Add";
import Saved from "../components/pages/Saved";
import Search from "../components/pages/Search";
import AddSponsor from "./pages/AddSponsor";
import AddChild from "./pages/AddChild";
import AddPayment from "./pages/AddPayment";

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
    Element: Redirect,
  },
];

const AddSectionRoutes = [
  {
    path: "/add/sponsor",
    Element: AddSponsor,
  },
  {
    path: "/add/child",
    Element: AddChild,
  },
  {
    path: "/add/payment",
    Element: AddPayment,
  },
];

export { AppRoutes, AddSectionRoutes };
