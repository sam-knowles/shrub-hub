import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [couhustles, setHustles] = useState([])

  useEffect(() => {
    axios.get('/hustles')
      .then(res => console.log(res))
  })

  return (
      <div>
        
    </div>
  )
}
