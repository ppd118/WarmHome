import React, { useState } from "react";
import BuyAndStoreView from "../BuyAndStoreView";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./style.less"

const BuyAndStore = (props) => {
    const [collected, setCollected] = useState(isCollected(props.id))
    const login = useSelector(state => state.login)
    const navigate = useNavigate()
    function isCollected(id) {
        return true
    }

    function collectHandle() {
        if (login.user.token) {
            setCollected(!collected)
        } else {
            // 未登录请先登录
            console.warn("请先登录！")
            navigate("/login")
        }

    }
    return (
        <div className="buy-and-store">
            <BuyAndStoreView isCollected={collected} collectHandle={collectHandle} />
        </div>
    )
}

export default BuyAndStore