import { useEffect, useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const [forward, setForward] = useState(true);

    const reset = () => setCounter(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (forward) {
                setCounter((prev) => prev + 1);
            } else {
                setCounter((prev) => prev - 1);
            }
        }, 1000);
        return () => clearInterval(interval)
    }, [forward]);

    return {
        counter,
        setForward,
        reset,
    };
}

export default useCounter;