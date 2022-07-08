import { API, URL_API } from "api/const.api";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import SimpleLoginForm from "simple-login-form"
import { loginAction } from "stores/slices/user.slice";

export const LoginPage = () => {
    const userInfo = useSelector(state => state.user.userInfoState);
    const dispatch = useDispatch();

    if(userInfo.data) {
        return <Navigate to={'/home'}/>
    }

    const formStyle = {
        // maxWidth: '350px',
        // maxHeight: '525px',
        // background: 'linear-gradient(#e66465, #9198e5)',
        // borderRadius: '2%'
    }

    const containerStyle = {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: '100vw',
        // height: '100vh'
    }
    

    const sendUserInfoToDatabase = (userInfo, event) => {
        event.preventDefault();
        console.log(userInfo);
        dispatch(loginAction(userInfo));
    }

    return <div style={containerStyle} className="login-page">
        <SimpleLoginForm
            getUserInfo={sendUserInfoToDatabase}
            style={formStyle}
        />
    </div>
}