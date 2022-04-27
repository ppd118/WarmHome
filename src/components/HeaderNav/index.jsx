import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";
import useDebounce from "../../utils/debounce"
import { useSelector } from "react-redux";
import api from "../../api";
import "./style.less"
const HeaderNav = (props) => {
    const [searchBlur, setSearchBlur] = useState([])
    const keywords = useSelector(state => state.search.keywords)
    const debounceSearchBlur = useDebounce((value) => {
        api.getSearchBlurResult({ keywords: value }).then((res) => {
            setSearchBlur(res.data.data)
        })
    }, 200)
    useEffect(() => {
        if (keywords?.length) {
            debounceSearchBlur(keywords)
        } else {
            setSearchBlur([])
        }
    }, [keywords])

    return (
        <div className='home-header-container'>
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{props.cityName}</span>
                    </Link>

                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="iconfont icon-car"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput />
                    </div>
                </div>
            </div>
            <ul className="fuzzy-search-container">
                {
                    keywords?.length ? searchBlur.map((item, index) => {
                        return (
                            <li key={index}><a href={'#/search/' + item.keywords}>{item.keywords}</a></li>
                        )
                    }) : ''
                }
            </ul>
        </div>

    )
}

export default HeaderNav