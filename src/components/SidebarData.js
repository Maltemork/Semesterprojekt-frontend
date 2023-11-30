import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import PaymentIcon from "@mui/icons-material/Payment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export const SidebarData = [
  {
    title: "Sponsors",
    icon: <GroupIcon />,
  },
  {
    title: "Children",
    icon: <PublicIcon />,
  },
  {
    title: "Payments",
    icon: <PaymentIcon />,
  },
  {
    title: "Add",
    icon: <AddIcon />,
  },
  {
    title: "Saved",
    icon: <FavoriteIcon />,
  },
  {
    title: "Search",
    icon: <SearchIcon />,
  },
];
