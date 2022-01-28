import { PATH } from "../../config";
import { IoMdSettings } from "react-icons/io";
import { BsFillLayersFill, BsHouseDoor, BsLayersFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import React from "react";

export const SidebarData = [
    {
        title: "Dashboard",
        path: PATH.DASHBOARD,
        icon: <BsHouseDoor size={24} />
    },
    {
        title: "My Courses",
        path: PATH.STAFF,
        icon: <FaFileContract size={24} />
    },
    {
        title: "Explore",
        path: PATH.ORGANISATION,
        icon: <BsFillLayersFill size={24} />
    },
    {
        title: "Bulletin Board",
        path: PATH.EMPLOYEES,
        icon: <BsLayersFill size={24} />,
    },
    {
        title: "Settings",
        path: PATH.CLINICIANS,
        icon: <IoMdSettings size={24} />
    },
]