import React, { useEffect, useState } from 'react'
import { loadImgAsync } from '../../../utils/loadImg'
import defaltImg from "../../../assets/images/default.png"
import "./style.less"


const Item = (props) => {
    let data = props.data
    const [img, setImg] = useState(defaltImg)

    useEffect(() => {
        let isMount = true
        loadImgAsync(data.src).then(res => {
            isMount && setImg(res)
        }).catch(error => {
            console.log(error)
        })

        return () => {
            isMount = false
        }
    }, [data])
    return (
        <div className="item-container">
            <img src={img} alt="加载中..." />
            <p className='title'>{data.title}</p>
            <p className='price'>{data.price}元/月</p>
        </div>
    )
}

export default Item