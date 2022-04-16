import React from "react";
import DetailHeader from "../../../components/PubHeader"
import Swiper from "../../../components/Swiper"
import BuyAndStore from "../BuyAndStore";
import "./style.less"

const DetailsView = (props) => {
    let data = props.data
    return (
        <div>
            <DetailHeader title="详情页" />
            <Swiper banners={data.imgs} />
            <div className="detail-info">
                <h3>{data.title}</h3>
                <div className="box">
                    <ul>
                        <li>
                            <span>{data.price} /月</span>
                            <p>租金</p>
                        </li>
                        <li>
                            <span>{data.info.type}</span>
                            <p>房屋类型</p>
                        </li>
                        <li>
                            <span>{data.houseType}</span>
                            <p>面积</p>
                        </li>
                    </ul>
                </div>
                <div className="info">
                    <div className="info-list">
                        <p>类型：{data.info.type}</p>
                        <p>朝向：{data.info.orientation}</p>
                    </div>
                    <div className="info-list">
                        <p>楼层：{data.info.level}</p>
                        <p>装修：{data.info.style}</p>
                    </div>
                    <div className="info-list">
                        <p>年代：{data.info.years}</p>
                    </div>
                </div>
            </div>
            <BuyAndStore id={props.id} />
        </div>
    )
}

export default DetailsView