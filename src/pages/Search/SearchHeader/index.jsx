import React from 'react'
// import { useNavigate } from 'react-router-dom'
import SearchInput from "../../../components/SearchInput"
import "./style.less"

const SearchHeader = () => {
    // const navigate = useNavigate()

    function backHandle() {
        // navigate(-1)
        window.history.back();
    }

    return (
        <div id="search-header" className="clear-fix">
            <span className="back-icon float-left" onClick={backHandle}>
                <i className="icon-chevron-left"></i>
            </span>
            <div className="input-container">
                <i className="icon-search"></i>
                <SearchInput />
            </div>
        </div>
    )
}

export default SearchHeader
