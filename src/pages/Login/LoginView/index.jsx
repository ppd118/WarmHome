import React, { useState } from "react";
import api from "../../../api";
import validatorInput from "../../../utils/validator";
import classnames from "classnames"
import "./style.less"

const LoginView = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    function submitHandle(e) {
        e.preventDefault()
        var { isValidate, errors } = validatorInput({
            username,
            password
        })
        if (isValidate) {
            // 数据校验成功则申请登录
            api.login({
                username,
                password
            }).then(res => {
                if (res.data.status === 200) {
                    // console.log(res.data)
                    setErrors({})
                    props.onLoginEvent(res.data)
                } else {
                    console.log("登陆失败");
                }

            })
        } else {
            //否则打印错误信息
            // console.log(isValidate)
            // console.log(errors)
            setErrors(errors)
        }

    }

    function changeHandle(e) {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    return (
        <div id="login-container">
            <form onSubmit={submitHandle}>
                <div className={classnames("input-container phone-container", { "input-container-error": errors.username })}>
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={changeHandle}
                        placeholder="用户名/手机号"

                    />
                </div>
                <div className={classnames("input-container password-container", { "input-container-error": errors.password })}>
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={changeHandle}
                        placeholder="输入验证码"
                        autoComplete='true'
                    />
                </div>

                <button className="btn-login">登录</button>
            </form>

        </div>
    )
}

export default LoginView