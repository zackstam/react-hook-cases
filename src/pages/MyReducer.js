import { useReducer } from "react";

function MyReducer() {
    console.log('rendering myreducer')
    const [count, dispatch] = useReducer((state, action) => {
        console.log(action);
        if (action.type === 'increment') {
            return state + action.data;
        } else if (action.type === 'decrement') {
            return state - 1;
        }else if (action.type === 'multi') {
            return state + 5;
        }
    }, 5);

    return (
        <div>
            <h5>My Reducer</h5>
            <span>Count : {count}</span>
            <br/>
            <button onClick={() => dispatch({ type: 'increment', data: 2 })}>Forward</button> &nbsp; 
            <button onClick={() => dispatch({type: 'decrement'})}>Backward</button>&nbsp; 
            <button onClick={() => dispatch({type: 'multi'})}>Multi</button>&nbsp; 
        </div>
    );
}

export default MyReducer;