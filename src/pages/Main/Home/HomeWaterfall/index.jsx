import React, { Fragment, useEffect, useState } from "react";
import Waterfall from "../../../../components/Waterfall";
import LoadMore from "../../../../components/LoadMore"
import Loading from "../../../../components/Loading";
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
                    :
                    <div>没有数据咯...</div>
                // <Loading />
            }

        </div>
    )

}

export default HomeWaterfall