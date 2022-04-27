import { useCallback, useRef } from "react";

function useDebounce(fn, delay = 300) {
    const timer = useRef()

    // const cancel = useCallback(() => {
    //     timer.current && clearTimeout(timer.current)
    // }, [])

    function fnDebounce(...rest) {
        timer.current && clearTimeout(timer.current)
        // cancel()
        timer.current = setTimeout(() => {
            fn(...rest)
        }, delay)

    }

    return fnDebounce
}

export default useDebounce