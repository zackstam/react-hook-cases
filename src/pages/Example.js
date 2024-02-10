import { useCallback, useEffect, useMemo, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);
    const [temp, setTemp] = useState(0);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    console.log('example  running')
    
    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     console.log('side effect running')
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // }, []);

  const getDataDummy = useCallback (async () => {
      console.log('running getDataDummy ! with page ', page);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + page)
      const dataResponse = await response.json();
      setData(dataResponse);
  }, [page])


    useMemo(() => {
        console.log('rendering table')
    }, [page]);

    // useEffect(() => {
    //     getDataDummy()
    // }, [getDataDummy]);

    // useEffect(() => {
    //     console.log('useeffect interval running start')
    //     const fInterval = setInterval(() => {
    //         console.log('running interval ')
    //     }, 1000);
    //     return () => {
    //         clearInterval(fInterval)
    //     }
    // }, []);
    
    return (
        <div>
        <p>You clicked {count} times</p>
        <p>value temp {temp}</p>
        {/* <button onClick={() => setCount(count + 1)}>
            Click me
        </button>&nbsp; */}
        {/* <button onClick={() => setTemp(temp + 1)}>
            Click me on temp
        </button> */}
        <button onClick={() => setPage(page + 1)}>
            next page
        </button>
        <p>{data.body}</p>
        </div>
    );
}

export default Example;