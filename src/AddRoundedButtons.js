import React from 'react'
import { useState } from 'react'
import RoundedButton from './RoundedButton'

export default function AddRoundedButtons() {

    const [input, setInput] = useState('')
    
    //list of data
    const [items, setItems] = useState([]);

    const doSomething = () => {
        let copy = items.concat([]) // creating a copy
        copy.push(input)

        setItems(copy)
    }

    return (
        <>
            <label>Name: </label>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <br />
            <button onClick={doSomething}>Add</button>


            <hr />

            {items.map(x => <RoundedButton label={x} />)} 


            

        </>
    )
}
