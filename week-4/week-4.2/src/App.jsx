import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(1);
  return (
    <>
      <div onClick={() => setCount((count) => count + 1)}>Count is {count}</div>
    </>
  )
}

export default App
