import { Fragment, React, useEffect, useState } from 'react'
import "./style.less"
import Item from './Item'

const Waterfall = (props) => {
    const [leftData, setLeftData] = useState([])
    const [rightData, setRightData] = useState([])
    // 数据分列
    useEffect(() => {
        let rightHight = 0, leftHeight = 0;
        let left = [], right = []
        props.data?.forEach(item => {
            let imgHeight = parseInt(item.src.replace('http://dummyimage.com/').split('/')[0].split('x')[1])
            if (leftHeight <= rightHight) {
                leftHeight = leftHeight + imgHeight
                left.push(item)
            } else {
                rightHight = rightHight + imgHeight
                right.push(item)
            }
        })
        setLeftData(left)
        setRightData(right)
    }, [])

    return (
        <Fragment>
            <div className="waterfall-container">
                <div className="container">
                    {
                        leftData.map((item) => {
                            return (
                                <Item data={item} key={item.id}></Item>
                            )
                        })
                    }

                </div>
                <div className="container">
                    {
                        rightData.map((item) => {
                            return (
                                <Item data={item} key={item.id}></Item>
                            )
                        })
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Waterfall