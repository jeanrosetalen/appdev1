import { useState } from "react"


const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>decrement</button>

    </div>
  );
};

export default Counter
