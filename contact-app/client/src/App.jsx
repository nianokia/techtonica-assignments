import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contact App</h1>
      <div className="card">
        Total Contacts:
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
