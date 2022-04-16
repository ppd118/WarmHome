import React from 'react'
import "./style.less"

const Item = (props) => {
    let data = props.data
    return (
        <div className="item-container">
            <img src={data.src} alt="加载中..." />
            <p className='title'>{data.title}</p>
            <p className='price'>{data.price}元/月</p>
        </div>
    )
}

export default Item