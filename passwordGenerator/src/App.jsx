import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[charAllowed, setCharAllowed]= useState(false)
  const[passLength, setPassLength]= useState(8)
  const[password, setPassword]= useState("")
  const[buttonText, setButtonText]= useState("Copy")
  const[isCopied, setIsCopied]= useState(false)
//useRef hook
  const passRef=useRef(null)

  let passGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number="0123456789"
    let specialchar="!@#$%&*_+="

    if(numberAllowed){
      str+=number
    }
    if(charAllowed){
      str+=specialchar
    }
    for(let i=1;i <= passLength; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)


  },[numberAllowed,charAllowed,passLength,setPassword])

  const copytoClipboard = useCallback(()=>{
    if(passRef.current){
    passRef.current.select();
    navigator.clipboard.writeText(passRef.current.value);
    setButtonText("Copied!");
    setIsCopied(true);

    setTimeout(() => {
      setButtonText("Copy");
      setIsCopied(false);
    }, 3000);
    }
  }, [password])

   
  
  useEffect(()=>{passGen()},[passGen,numberAllowed,charAllowed,passLength])

  return (
    <>
    <div className='w-1/2 mx-auto shadow-md rounded-lg px-10 py-10 my-20 bg-gray-800 text-white'>
      <h1 className='text-orange-500 text-center text-3xl'>Password Generator</h1>
      <div className='flex gap-4 rounded-lg overflow-hidden mb-4 my-6'>
        <input type="text"
        value={password}
        placeholder='Password'
        className='bg-gray-700 outline-none w-full rounded-lg py-2 px-3'
        readOnly
        ref={passRef}
        />
      <button
        className={`text-lg outline-none text-white p-2 rounded-lg text-center transition-colors duration-300 ${
          isCopied ? "bg-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-700 cursor-pointer"}`}
        onClick={copytoClipboard}
        disabled={isCopied}>
        
        {buttonText}
      </button>
      </div>
      <div className='flex gap-4 mb-4'>
        <div className='flex gap-2 items-center'>
          <input 
          type="range"
          min={8}
          max={20}
          value={passLength}
          className='cursor-pointer'
          onChange={(e) => {setPassLength(e.target.value)}}
           />
           <label className=' text-orange-400'>Length: {passLength}</label>
        </div>
        <div className='flex gap-x-1'>
          <div className='flex items-center'>
            <input type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberAllowed'
            onChange={()=>{setNumberAllowed((prev) => !prev)}} />
          </div>
          <label htmlFor="numberAllowed">Include Numbers</label>
        </div>
        <div className='flex gap-x-1'>
          <div className='flex items-center'>
            <input type="checkbox"
            defaultChecked = {charAllowed}
            id='charAllowed'
            onChange={()=>{setCharAllowed((prev) => !prev)}} />
          </div>
          <label htmlFor="charAllowed">Include character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
