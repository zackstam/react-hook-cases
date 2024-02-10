import React, { useState, useEffect } from 'react';
import Score from './Page/Score';

const Dashboard = () => {
    const [score, setScore] = useState(0);
    const [show, setShow] = useState(true);
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        const intervalScore = setInterval(() => {
            setScore((prev) => prev + 1);
            console.log('running interval');
        }, 1000);
        return () => {
            console.log('running cleanup Dashboard');
            clearInterval(intervalScore)
        };
    }, [])


    return (
        <div>
            { show ? (
                <div>
                    <Score score={score}/>
                </div>
            ) : null }
            
            <h4>{show}</h4>
            <h5>{counter}</h5>
            <button onClick={() => setShow((prev) => !prev)}>
                toggle
            </button>
            <button onClick={() => setCounter((prev) => prev+1)}>
                add counter
            </button>

        </div>
    );
}

export default Dashboard;
