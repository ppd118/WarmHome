import { useRef } from "react";

function throttle(fn, delay = 300) {
    let timer = null
    function fnThrottle(...args) {
        // console.log(timer)
        if (!timer) {
            timer = setTimeout(() => {
                // console.log("throttle fn")
                fn(...args)
                timer = null
            }, delay)

        }
    }
    return fnThrottle
}

export default throttle