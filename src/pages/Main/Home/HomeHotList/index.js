import React, { useState, useEffect } from "react"
import HomeHotView from "../HomeHotView"
import api from "../../../../api"


const HomeHotList = (props) => {
    const [hotList1, setHotList1] = useState([])
    const [hotList2, setHotList2] = useState([])
    // 只获取一次
    useEffect(() => {
        api.getHomeHot1({ cityName: props.cityName }).then(res => {
            if (res.data.status === 200) {
                setHotList1(res.data.result)

            }
        })
    }, [])

    useEffect(() => {
        api.getHomeHot2({ cityName: props.cityName }).then(res => {
            if (res.data.status === 200) {
                setHotList2(res.data.result)
            }
        })
    }, [])

    return (
        <div>
            {
                hotList1.length > 0 ?
                    <HomeHotView data={hotList1} title={"热门商品"} /> :
                    <div>数据正在加载...</div>
            }
            {
                hotList2.length > 0 ?
                    <HomeHotView data={hotList2} title={"新品推荐"} /> :
                    <div>数据正在加载...</div>
            }
        </div>
    )
}

export default HomeHotList