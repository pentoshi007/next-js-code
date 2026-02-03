import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleSetCount = () => {
    const num = parseInt(inputValue, 10)
    if (!isNaN(num)) {
      setCount(num)
    }
    setInputValue('')
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleSetCount}>Set Count</button>
    </>
  )
}

export default App
