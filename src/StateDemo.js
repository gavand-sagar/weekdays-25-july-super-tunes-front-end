import React from 'react'
import { useState } from 'react'

export default function StateDemo() {

    const [anyThing, anyNameForChangeValueFunction] = useState('sagar')

    const doSomething = () => {
        anyNameForChangeValueFunction('I dont know what should I type here....')
    }

    return (
        <div>
            <button onClick={() => doSomething()} >Change Label</button>
            <p>{anyThing}</p>
        </div>
    )
}
