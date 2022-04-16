import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginAction from "../../redux/actions/login"
import PubHeader from "../../components/PubHeader"

const Login = () => {

    const dispatch = useDispatch()

    function loginHandle(user) {

        // 写入redux
        dispatch(loginAction.login(user))
        // 写入本地
        localStorage.setItem("warmWarm", JSON.stringify(user))

        window.history.back()
    }

    return (
        <div>
            <PubHeader title="登录" />
            <LoginView onLoginEvent={loginHandle} />
        </div>
    )

}

export default Login