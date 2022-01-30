import React from 'react';
import { Header } from ".";
import { ChatButton } from '..';
import Sidebar from "./SideBar";
// import swal from 'sweetalert2'
export function ParentComponentwithoutContainer({ children, ...rest }) {
    return (
        <div className="main-wrapper">

            <Header />
            <Sidebar />
            <div className="page-wrapper">
                {children}
            </div>
        </div>
    )
}



