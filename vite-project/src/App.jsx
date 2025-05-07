import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className = "h-screen"style={{backgroundColor : color}}>
      <div className = "flex gap-4 fixed bottom-0 justify-center p-8 bg-gray-300 w-full">
        <button onClick={() => setColor("blue")}
        className="outline-none text-white" 
        style={{backgroundColor:"blue"}}>Blue</button>
        <button 
        onClick={() => setColor("coral")}
        className="outline-none text-white" 
        style={{backgroundColor:"coral"}}>Coral</button>
        <button onClick={() => setColor("green")}
        className="outline-none text-white" 
        style={{backgroundColor:"green"}}>Green</button>
      </div>
    </div>
    </>
  )
}

export default App
