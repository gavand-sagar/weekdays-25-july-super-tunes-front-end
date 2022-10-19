import React, { useState, useEffect } from 'react'

export default function ExpandCollapse({ heading, body }) {

    const [expanded, setExpanded] = useState(false);
    const [fact, setFact] = useState();

    const getNewFact = () => {




    }

    useEffect(() => {

        if (expanded == true) {
            setFact('Loading...')
            fetch('https://catfact.ninja/fact')
                .then(a => a.json())
                .then(res => {
                    setFact(res.fact)
                })

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
        <div className='expand-collapse'>

            <h3 onClick={headingClicked}>{heading}</h3>

            {expanded && <p>{fact}</p>}

        </div>
    )
}
