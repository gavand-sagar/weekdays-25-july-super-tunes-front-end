import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomNavigator() {
    const [urlRoute, setUrlRoute] = useState('')

    const navigate = useNavigate()

    function doSomething() {        
        navigate(urlRoute)
    }


    return (
        <div>
            <input value={urlRoute} onChange={e => setUrlRoute(e.target.value)} />
            <button onClick={doSomething}>Go</button>
        </div>
    )
}
