import React, { useEffect, useRef, useState } from "react";
import useDebounce from "../../utils/debounce";
import "./style.less"

const LoadMore = (props) => {
    let more = useRef()

    const loadMoreDebounce = useDebounce(() => {
        console.log("loadmore...")
        props.onLoadMore()
    }, 300)

    useEffect(() => {
        console.log("loadMore useEffect")

        function scrollHandle() {
            let winHeight = document.documentElement.clientHeight
            if (more.current) {
                if (more.current.getBoundingClientRect().top < winHeight) {
                    loadMoreDebounce()
                }
            }
        }

        window.addEventListener("scroll", scrollHandle)

        return () => {
            window.removeEventListener("scroll", scrollHandle)
        }
    }, [loadMoreDebounce])

    // loadmore防抖
    // useEffect(() => {
    //     if (isLoadMore) {
    //         loadMoreDebounce()
    //     }
    // }, [isLoadMore])


    return (

        <div ref={more} className="load">
            加载更多...
        </div>
    )
}

export default LoadMore

