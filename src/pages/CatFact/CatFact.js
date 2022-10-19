import React, { useEffect, useState } from 'react'
import { useRouteProtector } from '../../use-route-protector';

export default function CatFact() {

    useRouteProtector()


    const [fact, setFact] = useState();
    const getNewFact = () => {

        setFact('Loading...')

        fetch('https://catfact.ninja/fact')
            .then(a => a.json())
            .then(res => {
                setFact(res.fact)
            })
    }


    const [activity, setActivity] = useState();
    const tellMeActivity = () => {

        setActivity('Loading...')

        fetch('https://www.boredapi.com/api/activity')
            .then(a => a.json())
            .then(res => {
                setActivity(res.activity)
            })
    }


    useEffect(() => {
        getNewFact();
        tellMeActivity();
    }, [])

    return (
        <div>
            <button onClick={getNewFact}>Get New Fact</button>
            <hr />
            Fact : {fact}



            <br />
            <br />
            <hr />
            <br />
            <br />
            <button onClick={tellMeActivity}>I am bored</button>
            <hr />
            Activity to do : {activity}

        </div>
    )
}
