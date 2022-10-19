import React, { useEffect, useState } from 'react'

export default function ToggleButton() {

    const [expanded, setExpanded] = useState(false)

    const [name, changeName] = useState('')


    // useEffect(() => {
    //     alert('component loaded')
    // })

    useEffect(() => {
        if (expanded == true) {
            alert('Activated')
        }
    }, [expanded])


    const headingClicked = () => {
        if (expanded === true) {
            setExpanded(false)
        } else {
            setExpanded(true)
        }
    }

    return (
        <div>
            <div className={expanded == true ? 'toggle-button-container active' : 'toggle-button-container'}>
                <div onClick={headingClicked} className='button-thumb'></div>
            </div>

            <br />
            <input />
        </div>
    )
}
