import React, { useState } from 'react'
import TableRow from './TableRow.js'
import TableHeader from './TableHeader.js'
import SquareButton from '../../SquareButton.js'
import { useRouteProtector } from '../../use-route-protector.js'

export default function Table() {

    useRouteProtector()

    const data = [
        {
            session: 'Session 15',
            sessionId: 'WCD-32HDJSDJH',
            date: '21st Sep 2022',
            noOfPax: 40,
            status: 'In Progress'
        },
        {
            session: 'Session 19',
            sessionId: 'WCD-32HDSFSDD',
            date: '29st Sep 2022',
            noOfPax: 10,
            status: 'In Progress'
        },
        {
            session: 'Session 15',
            sessionId: 'WCD-32HDJSDJH',
            date: '21st Sep 2022',
            noOfPax: 40,
            status: 'In Progress'
        },
        {
            session: 'Session 19',
            sessionId: 'WCD-32HDSFSDD',
            date: '29st Sep 2022',
            noOfPax: 10,
            status: 'In Progress'
        },

    ]




    const [buttonsList, setButtonList]
        = useState(['faq', 'about', 'recipe', 'table'])

    return (
        <div>
            <TableHeader />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <p>something</p>
            {
                buttonsList.map(x => <>  <SquareButton label={x}/> </>)
            }



            {/* {
                data.map(x => <TableRow session={x.status} sessionId={x.sessionId} date={x.date} noOfPax={x.noOfPax} status={x.status} />)
            } */}

        </div>
    )
}
