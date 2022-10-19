import React, { useState } from 'react'
import RoundedButton from './RoundedButton.js'
import Sagar from './Sagar.js'

export default function Lists() {

    const [items, setItems] = useState(
        ["java", "javascript", "HTML", "react", "express", "node"])

    return (
        <div>

            {items.map(x => <RoundedButton label={x}/>)}
           
        </div>
    )
}
