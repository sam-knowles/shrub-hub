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

  useEffect(() => {
    getHustles()
  }, [])

  return (
      <div>
        <AddMovieForm />
        { hustles.map(hustle => <Hustle {...hustle} key={hustle.name}/>)}
    </div>
  )
}
