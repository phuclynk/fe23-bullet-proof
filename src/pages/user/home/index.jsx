import { ProtectedRoute } from "components/protected-route";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logoutAction } from "stores/slices/user.slice";

export function HomePage() {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logoutAction())
    }

    return ( <div className="home-page">
        <h1>HOME PAGE</h1>
        <button onClick={onLogout}>Logout</button>
        <ProtectedRoute />
    </div> );
}