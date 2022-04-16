import React from "react";
import "./style.less"

const CityList = (props) => {

    function clickCityHandle(city) {
        // console.log(city)
        // 回调父组件传进来的函数把选中的city传递给父组件
        props.onEvent(city)
    }

    return (
        <div className="city-list-container">
            <h3>热门城市</h3>
            <ul className="clear-fix">
                <li onClick={() => clickCityHandle('昆明')}><span>昆明</span></li>
                <li onClick={() => clickCityHandle('成都')}><span>成都</span></li>
            </ul>
        </div>
    )
}

export default CityList