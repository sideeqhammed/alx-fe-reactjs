import { useState } from "react";

function Counter () {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
        <button onClick={() => {setCount(count - 1)}}>Decrement</button>
      </div>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </>
  )
}

export default Counter
