import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseHandler = () => setCount(count + 1)
    const decreaseHandler = () => setCount(count - 1)
    return (
        <div>
            <h3 class="text-info mt-3">Countet : {count}</h3>
            <button onClick={increaseHandler} type="button" class="btn btn-primary m-2">Increase</button>
            <button onClick={decreaseHandler} type="button" class="btn btn-danger m-2">Decrease</button>
            
        </div>
    );
};

export default Counter;