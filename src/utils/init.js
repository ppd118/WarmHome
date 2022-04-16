import store from "../../src/redux/store"
import * as loginAction from "../../src/redux/actions/login"

// 初始化登录信息
if (localStorage.getItem("warmWarm")) {
    store.dispatch(loginAction.login(JSON.parse(localStorage.getItem("warmWarm"))))
}