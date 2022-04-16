import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../../redux/actions/index"
import "./style.less"


const SearchInput = () => {
    const navigate = useNavigate()
    const [keywords, setKeywords] = useState('')
    const param = useParams()
    // const input_keywords = useRef()
    // const reduxKeywords = useSelector(state => state.search)
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
            // setKeywords("")
        }

    }, [param.keywords])

    function onChangeHandle(e) {
        setKeywords(e.target.value)
    }
    return (
        <input type="text"
            className="search-input"
            // ref={input_keywords}
            value={keywords}
            onKeyUp={keyUpHandle}
            onChange={onChangeHandle} />

    )
}

export default SearchInput