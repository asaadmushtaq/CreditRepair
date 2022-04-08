import React from "react";
import { ROLE } from "../../config";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import AdminDashboard from "../Admin/Admin-Dashboard";
import ClientDashbaord from "../Client/client-dashboard";

export default function Dashboard() {
    let auth = useAuth();
    return (
        <>
            {auth?.credit_repair_user?.role === ROLE.CLIENT && <ClientDashbaord />}
            {auth?.credit_repair_user?.role === ROLE.BUSINESS && <AdminDashboard />}
        </>
    );
}
