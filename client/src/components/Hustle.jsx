import React from 'react'

export default function Hustle(props){
    const { name, description, market, _id } = props
    return (
        <div>
            <h1>Name: { name }</h1>
            <p>Description: { description }</p>
            <p>market: { market }</p>
                <button
                    onClick={() => props.deleteHustle(_id)}>Delete</button>
        </div>
    )
}

