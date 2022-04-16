import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadImgAsync } from '../../../../utils/loadImg'
import defaltImg from "../../../../assets/images/default.png"
import "./style.less"

const Item = (props) => {
    const data = props.data
    const [img, setImg] = useState(defaltImg)

    useEffect(() => {
        let isMount = true
        // 图片异步加载--内存泄漏
        loadImgAsync(data.img).then(res => {
            isMount && setImg(res)
        }).catch(error => {
            console.log(error)
        })

        return () => {
            isMount = false
        }
    }, [data])

    return (
        <div className="list-item">
            <Link to={`/details/${data.id}`} >
                <img src={img} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{data.title}</p>
                        <p>{data.houseType}</p>
                    </div>
                    <div className="right">
                        <div className="btn">
                            {data.rentType}
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: data.price + "元/月" }}></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item
