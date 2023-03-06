import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0)
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {/* Supported {count} */}

      {(() => {
        if (count === 0) {
          return "Click to support";
        } else {
          return `Clicked: ${count}`
        }
      })()}
      
      {/* {count === 0 ? "Click to support": `Supported ${count} times`} */}
    </button>
  )
}