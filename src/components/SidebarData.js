import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

export const SidebarData = [
    {
        title: "Sponsors",
        icon: <GroupIcon />,
        link: "/sponsors"
    },
    {
        title: "Children",
        icon: <PublicIcon />,
        link: "/children"
    },
    {
        title: "Payments",
        icon: <PaymentIcon />,
        link: "/payments"
    },
    {
        title: "Saved",
        icon: <FavoriteIcon />,
        link: "/saved"
    },
    {
        title: "Search",
        icon: <SearchIcon />,
        link: "/search"
    }
]
;

