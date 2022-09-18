import React, { useState } from 'react'

export default function AddHustleForm(props){
    const initInputs = {name: "", description: "", market: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addHustle(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
         <input 
            type="text" 
            name="name" 
            value={inputs.name} 
            onChange={handleChange} 
            placeholder="Name"/>
         <input type="text" 
            name="description" 
            value={inputs.description} 
            onChange={handleChange} 
            placeholder="Description"/>
         <input 
            type="text" 
            name="market" 
            value={inputs.market} 
            onChange={handleChange} 
            placeholder="Market"/>
         <button>Add Hustle</button>
        </form>
    )
}