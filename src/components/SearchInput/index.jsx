import React, { useEffect, useState, useRef, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../../redux/actions/index"
import api from "../../api";
import "./style.less"


const SearchInput = () => {
    const navigate = useNavigate()
    const [keywords, setKeywords] = useState('')
    const param = useParams()
    const disPatch = useDispatch()
    function keyUpHandle(e) {
        if (keywords.length > 0) {
            if (e.keyCode === 13) {
                navigate("/search/" + keywords)
                disPatch(actions.updateKeywords(keywords))
            }
        }
    }

    // 回传
    useEffect(() => {
        if (param.keywords) {
            disPatch(actions.updateKeywords(param.keywords))
            setKeywords(param.keywords)
        } else {
            disPatch(actions.updateKeywords(""))
        }

    }, [param.keywords])

    function onChangeHandle(e) {
        setKeywords(e.target.value)
        disPatch(actions.updateKeywords(e.target.value))
    }
    return (
        <input type="text"
            className="search-input"
            value={keywords}
            onKeyUp={keyUpHandle}
            onChange={onChangeHandle} />
    )
}

export default SearchInput