import React, { useEffect, useState } from 'react';

const UsingUseEffect = () => {
    const [clicks, setClicks] = useState(0)
    const [clickedText, setClickedText] = useState("")
    const [data, setData] = useState("")
    const [news, setNews] = useState("")


    useEffect(() => {
      console.log(clicks, 'call use effect');
      fetch('https://dummyjson.com/products/1')
      .then((response) => response.json())
      .then((data) => setData(data));
    
      return () => {
        console.log(17);
      }
    }, [clicks])

    const handleChangeName = (event) => {
      // console.log(event.target.value);
      setNews(event.target.value)
    }
    
    return (
      <>
        <p>{clickedText}</p>
        {data.title}
        <input type="text" onChange={handleChangeName} />
        <button onClick={() => setClicks(c => c+1)}>Click Me</button>
      </>
    )
}

export default UsingUseEffect;
