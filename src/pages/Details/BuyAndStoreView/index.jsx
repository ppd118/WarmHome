import React from "react";
import "./style.less"


const BuyAndStoreView = (props) => {
    return (
        <div className="buy-store-container">
            <div className="item-container float-left">
                {
                    props.isCollected ?
                        <button onClick={props.collectHandle}>收藏</button>
                        : <button className="o" onClick={props.collectHandle}>已收藏</button>
                }

            </div>
            <div className="item-container float-right">
                <button>购买</button>
            </div>
        </div>
    )
}

export default BuyAndStoreView