import React from "react";
import classnames from 'classnames'
import "./style.less"

const Pagination = (props) => {
    const arr = new Array(props.len).fill(1)
    let curIndex = props.curIndex
    return (
        <div className='swiper-pagination'>
            <ul>
                {
                    arr.map((ele, index) => {
                        return <li key={index} className={classnames({ 'selected': curIndex === index })}></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Pagination