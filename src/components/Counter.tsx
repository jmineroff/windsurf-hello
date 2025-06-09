import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Clicks: {count}
      </button>
    </div>
  )
}

export default Counter
