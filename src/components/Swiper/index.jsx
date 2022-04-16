import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./style.less";
import Pagination from "./Pagination";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Swiper = (props) => {
    let [index, setIndex] = useState(0)

    let handelChangeIndex = (index) => {
        // console.log(index)
        setIndex(index)
    }
    return (
        <div className='swiper'>
            <AutoPlaySwipeableViews index={index} onChangeIndex={handelChangeIndex}>
                {
                    props.banners.map((ele, index) => {
                        return (
                            <div key={index} className="swiper-view">
                                <img src={ele} alt={"banner" + index} />
                            </div>
                        )
                    })
                }
            </AutoPlaySwipeableViews>
            <Pagination len={props.banners.length} curIndex={index} />
        </div>

    )
}

export default Swiper