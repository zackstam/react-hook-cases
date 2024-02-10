import React, { useState, useCallback, useEffect } from 'react';
import Todos from './Page/Todos';

const UsingCallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };



    // const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   }, [todos]);
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <button onClick={() => window.location.reload() }>reload</button>
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
}

export default UsingCallback;
