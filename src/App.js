import React from 'react'

import { useEffect } from 'react'
import { useState } from 'react'
import { fetches } from './fetchWheather'
const App = () => {
const [data,setData] = useState('')
  useEffect(() => {
    const get = async () => {
      try {
        const data = await fetches()
        setData(data)
      } catch (error) {
          setData({title : 'hello offlie bro'})
      }
  
    }
    get()
  }, [])
  if (data === '') {
    return (
      <h1>
         Loading....
       </h1>
    )
  }//
  return (
    <div>
        {data.title}
    </div>
  )
}

export default App