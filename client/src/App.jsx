import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hustle from './components/Hustle.jsx'

export default function App() {
  const [hustles, setHustles] = useState([])

  useEffect(() => {
    axios.get('/hustles')
      .then(res => setHustle(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
      <div>
        { hustles.map(hustle => <Hustle {...hustle} key={hustle.name}/>)}
    </div>
  )
}
