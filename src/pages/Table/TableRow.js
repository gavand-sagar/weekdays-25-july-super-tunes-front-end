import React from 'react'

export default function TableRow(
    {
        session,
        sessionId,
        date,
        noOfPax,
        status
    }) {
    return (
        <div className='row'>
            <div className='column w-1'>{session}</div>
            <div className='column w-3 blue'>{sessionId}</div>
            <div className='column w-3'>{date}</div>
            <div className='column w-1'>{noOfPax}</div>
            <div className='column w-1 yellow'>{status}</div>
            <div className='column w-1 blue'>Start</div>
        </div>
    )
}
