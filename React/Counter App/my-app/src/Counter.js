import React, {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);

    const decrease = () => {
      if(count>0){
      setCount(count-1)
      }
    }
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <p>{count}</p>
    </div>
  )
}
export default Counter;
