import React from "react";
import { useNavigate } from "react-router-dom"
import "./style.less"


const PubHeader = (props) => {

    const navigate = useNavigate()
    // 返回上一页面的方式
    function backHandle() {
        navigate(-1)
        // window.history.back() h5方法不用withRouter
    }
    return (
        <div id="common-header">
            <span className="back-icon" onClick={backHandle}>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{props.title}</h1>
        </div>
    )
}

export default PubHeader