import React, { useState, useEffect } from "react";
import CitySelect from 'react-city-select';
import cityLists from '../../../data/city'
import api from "../../../api";

const AllCity = (props) => {
    const [cityData, setCitydata] = useState({
        // 结构化城市列表数据
        citysData: cityLists.indexcity,
        // 对某项数据定制化配置
        config: {
            pos: {
                // icon: iconSrc, // 游标图标
                title: '定位城市',
            },
            hot: {
                title: '热门城市',
                key: '热门',
                style: 'grid', // 展示形式（ line || grid）
            }
        }
    })
    const config = {
        pos: {
            // icon: iconSrc, // 游标图标
            title: '定位城市',
        },
        hot: {
            title: '热门城市',
            key: '热门',
            style: 'grid', // 展示形式（ line || grid）
        }
    }
    useEffect(() => {
        api.getCityData().then(res => {
            // console.log(res)
            setCitydata(res.data.result)
        })
    }, [])

    function handleSelectCity(cityData) {
        props.onEvent(cityData.name)
    }


    return (
        <div className="citylists">
            {/* <h3>城市列表</h3> */}
            <CitySelect
                data={cityData.citysData}
                config={config.config}
                // 传入选中回调
                onSelectItem={handleSelectCity}>
            </CitySelect>
        </div>
    )
}

export default AllCity