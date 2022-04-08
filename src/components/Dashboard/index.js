import React from "react";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import AdminDashboard from "../Admin/Admin-Dashboard";
import ClientDashbaord from "../Client/client-dashboard";

export default function Dashboard() {
    let auth = useAuth();
    return (
        <>
            {auth &&
                auth.credit_repair_user &&
                auth.credit_repair_user.roleId &&
                auth.credit_repair_user.roleId === 3 && <ClientDashbaord />}
            {auth &&
                auth.credit_repair_user &&
                auth.credit_repair_user.roleId &&
                auth.credit_repair_user.roleId === 2 && <AdminDashboard />}
        </>
    );
}
