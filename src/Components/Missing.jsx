import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Missing = () => {
  const navigate = useNavigate()
  const [time, timeDecrement]= useState(3) 
  useEffect(()=>{
    const decrement = setInterval(()=>{
      timeDecrement(prevcount=>prevcount-1)
    }, 1000)
    return()=>clearInterval(decrement)
  }, [])
  useEffect(()=>{
    if(time===0){
      navigate('/')
    }
  }, [time])

  return (
    <main className='Missing' style={{border:"1px solid black", borderRadius:"15px", height:"200px", marginBottom:"30px"}}>
        <h2>Page Not found 😒😒</h2>
        <p>Well, that is disppointing</p>
        <hr />
        <p>Visit our Home page</p>
        <p>Redirecting {time}....</p>
        
    </main>
  )
}

export default Missing
