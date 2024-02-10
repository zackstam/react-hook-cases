import useCounter from "./useCounter";

function ForwardCounter() {
    const {counter, setForward, reset} = useCounter();

    return (
        <div>
            Foward : {counter} &nbsp;
            <button onClick={() => setForward((prev) => !prev)}>toggle</button>&nbsp;
            <button onClick={() => reset()}>reset</button>

        </div>
    );
}

export default ForwardCounter;