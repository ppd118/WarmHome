import React, { Fragment, useEffect, useState } from "react";
import Waterfall from "../../../../components/Waterfall";
import LoadMore from "../../../../components/LoadMore"
import api from "../../../../api";
const HomeWaterfall = (props) => {
    const [waterfallData, setWaterfallData] = useState([])
    useEffect(() => {
        // let isMount = true
        reqWaterfallData()
        // return () => {
        //     isMount = false
        // }
    }, [props.cityName])

    console.log("waterfallData.length:" + waterfallData.length)

    function loadMoreHandle() {
        reqWaterfallData()
    }
    function reqWaterfallData() {
        api.getHomeHot3({
            cityName: props.cityName
        }).then(res => {
            console.log(res.data.result)
            setWaterfallData([...waterfallData, ...res.data.result])
        })
    }

    return (
        <div>

            {
                waterfallData.length > 0 ?
                    <Fragment>
                        <Waterfall data={waterfallData} />
                        <LoadMore onLoadMore={loadMoreHandle} />
                    </Fragment>
                    : <div>数据加载中... </div>
            }

        </div>
    )

}

export default HomeWaterfall