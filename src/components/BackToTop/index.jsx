import React, { useEffect, useState, useRef } from "react";
import throttle from "../../utils/throttle";
import './style.less'

const BackToTop = ({ bottomBias = 0 }) => {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef()


    const clickHandle = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    //挂载:绑定滚动
    useEffect(() => {
        const throttleScrollHandle = throttle(() => {
            if ((document.documentElement.scrollTop > document.documentElement.clientHeight) && !isVisible) {
                console.log('set visible')
                setIsVisible(true)
            } else {
                console.log('set hide')
                setIsVisible(false)
            }
        }, 1000)
        //节流
        window.addEventListener("scroll", throttleScrollHandle)

        return () => {
            window.removeEventListener("scroll", throttleScrollHandle)
        }

    }, [])

    //监听isVisible，改变按钮的bottom
    useEffect(() => {
        if (isVisible) {
            console.log('visible')
            domRef.current.style.bottom = `${bottomBias + 20}px`
        } else {
            console.log('hide')
            domRef.current.style.bottom = '-40px'
        }
    }, [isVisible])

    return (
        <div ref={domRef}
            onClick={clickHandle}
            className="back2top-container">
            {/* <i className="iconfont icon-toTop"></i> */}
            Top
        </div>
    )
}

export default BackToTop