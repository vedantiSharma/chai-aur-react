import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberallowed] = useState(false)
  const [charAllowed, setcahrallowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if (numberAllowed)  str += "0123456789"
    if (charAllowed)  str += "~`!@#$%^&*()_-{}[]'<>/?., "

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass)



  }, [charAllowed, numberAllowed, length, setpassword])



  

  //we use here USEefffect() fun to unite password this useeffect helps to generate the paswwordd

  useEffect( ()=>{
    passwordGenerator()
  } , [charAllowed, numberAllowed, passwordGenerator, length])

  const CopyPasswordOnClipBoard = useCallback( ()=>{
    window.navigator.clipboard.writeText(password )
  }

    ,[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-11 text-center bg-slate-800'>
        <h1 className='text-center my-1 text-white'>PassWord Generator</h1>
        <div className='flex-shadow overflow-hidden mb-4 py-7 rounded-lg'>
          <input
            type="text"
            value={password}
            className='outline-none w-90 py-1 px-3 '
            placeholder='password'
            readOnly
            ref = {passwordref}
          />
          <button onClick= {CopyPasswordOnClipBoard}className=' outline-none bg-blue-700 text-white px-3 py-0.5 w-15 shrink-0 '>copy</button>




        </div>
        <div className='flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1 text-orange-500'>
            <input type='range'
              min={6}
              max={100}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label> Length :{length}</label>
          </div>
          <div className=' flex text-sm gap-x-2 text-orange-500'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>

          </div>
          <div className=' flex text-sm gap-x-2 text-orange-500'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setcahrallowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
