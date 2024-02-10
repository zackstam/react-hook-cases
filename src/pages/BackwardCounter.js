import useCounter from "./useCounter";

function BackwardCounter() {
    const {counter, setForward} = useCounter();
    
    return (
        <div>
            Backward: {counter}&nbsp;
            <button onClick={() => setForward((prev) => !prev)}>toggle</button>
        </div>
    );
}

export default BackwardCounter;