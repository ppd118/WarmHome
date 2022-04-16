import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CityHeader from "../../components/PubHeader"
import CurrentCity from "./CurrentCity"
import CityList from "./CityList"
// import "./style.less"
import { useSelector, useDispatch } from "react-redux"
import { initCity, changeCity } from "../../redux/actions"
import AllCity from "./AllCity"

const City = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const city = useSelector(state => state.city)
    // console.log(city)
    // 子传父，定义事件回调
    function onCityEvent(city) {
        // console.log(city)
        dispatch(changeCity(city))
        navigate('/')
    }

    return (
        <div>
            <CityHeader title="城市选择" />
            <CurrentCity city={city.cityName} />
            {/* <CityList onEvent={onCityEvent} /> */}
            <AllCity onEvent={onCityEvent}></AllCity>
        </div>
    )
}

export default City