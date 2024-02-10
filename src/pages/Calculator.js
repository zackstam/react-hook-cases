import { useEffect, useMemo, useState } from "react";

function Calculator() {
    const [count, setCount] = useState(0);
    const [angka, setAngka] = useState(0);
    const [title, setTitle] = useState('');
    

    useEffect(() => {
        console.log('useEffect running ');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setTitle(json.title))
        
        return () => {
            console.log('will unmount');
        }
    }, [count])

    const countAngka = (val) => {
        // console.log('rendering count angka');
        return val*1000;
    }


    return (
        <div>
            {title}
            <h4>Calculator</h4>

            count {count} <br/>
            angka {angka} <br/>
            <button onClick={() => setCount(prev => prev + 1)}>Add Count</button><br/>
            <button onClick={() => setAngka(prev => prev + 1)}>Add Angka</button>
            <button onClick={() => setAngka(prev => prev - 1)}>Subtract Angka</button>


        </div>
    );
}

export default Calculator
