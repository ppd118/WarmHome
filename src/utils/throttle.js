import { useRef } from "react";

function useThrottle(fn, delay = 300) {
    const preTime = useRef(0)
    const context = this
    console.log(fn)
    return function throttleFn() {
        let curTime = Date.now()
        if (Date.now() - preTime.current >= delay) {
            fn.apply(context, ...arguments)
            preTime.current = curTime
        }
    }
}

export default useThrottle