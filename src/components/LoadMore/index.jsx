import React, { useEffect, useRef, useState, memo } from "react";
import Loading from "../Loading"
import useThrottle from "../../utils/throttle";
import "./style.less"

const LoadMore = (props) => {
    let more = useRef()
    useEffect(() => {
        let timer = null
        function scrollHandle() {
            let winHeight = document.documentElement.clientHeight
            if (more.current && more.current.getBoundingClientRect().top < winHeight) {
                if (!timer) {
                    timer = setTimeout(() => {
                        props.onLoadMore && props.onLoadMore()
                        timer = null
                    }, 1000)
                }
            }
        }
        window.addEventListener("scroll", scrollHandle)
        return () => {
            window.removeEventListener("scroll", scrollHandle)
        }
    }, [props.onLoadMore])


    return (

        <div ref={more} className="load">
            <Loading />
        </div>
    )
}

export default LoadMore

