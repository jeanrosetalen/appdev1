import { useState } from "react";


function MyButton({count, onClick}) {
  return (
    <>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </>
  )
}

function MyApp () {
  const [count, setCount] = useState(0);

  function handleClick () {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

    </div>
  )
}

export default MyApp
