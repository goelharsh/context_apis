import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Counter = () => {

    const {state, decrement , increment}  = useContext(AppContext)

  return (
    <div className='flex h-screen items-center justify-center'>
        <button onClick={()=> decrement()} className='p-4 m-4 bg-slate-400 text-white'>Decrement</button>
        <div>{state}</div>
        <button onClick={()=> increment()} className='p-4 m-4 bg-slate-400 text-white'>Increment</button>
    </div>
  )
}

export default Counter