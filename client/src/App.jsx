import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hustle from './components/Hustle.jsx'
import AddHustleForm from './components/AddHustleForm.jsx'

export default function App() {
  const [hustles, setHustles] = useState([])

  function getHustles(){
    axios.get('/hustles')
    .then(res => setHustle(res.data))
    .catch(err => console.log(err))
  }

  function addHustle(newHustle){
    axios.post("/hustles", newHustle)
    .then(res => {
      setHustles(prevHustles => [...prevHustles, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteHustle(hustleId){
    axios.delete(`/hustles/${hustleId}`)
    .then(res => {
      setHustles(prevHustles => prevHustles.filter(hustle => hustle._id !== hustleId))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getHustles()
  }, [])

  return (
      <div>
        <AddHustleForm 
          addHustle={addHustle}
        />
        { 
          hustles.map(hustle => 
            <Hustle 
              {...hustle} 
              key={hustle.name}
              deleteHustle={deleteHustle}/>)
            }
    </div>
  )
}
