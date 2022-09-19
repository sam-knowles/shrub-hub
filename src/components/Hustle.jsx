import React from 'react'
import AddHustleForm from './AddHustleForm.jsx.js'

export default function Hustle(props){
    const { name, description, market, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
            <>
                <h1>Name: { name }</h1>
                <p>Description: { description }</p>
                <p>market: { market }</p>
                <button
                    onClick={() => props.deleteHustle(_id)}>
                    Delete
                </button>
                <button>
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    Edit
                </button>
            </>
            :
                <>
                    <AddHustleForm 
                        name={name}
                        description={description}
                        market={market}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editHustle}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                        </button>
                </>
            }
        </div>
    )
}

