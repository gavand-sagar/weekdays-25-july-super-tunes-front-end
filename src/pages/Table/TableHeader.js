import React from 'react'

export default function TableHeader() {
    return (
        <div className='row header'>
            <div className='column w-1'>Session</div>
            <div className='column w-3'>Workshop Id</div>
            <div className='column w-3'>Date</div>
            <div className='column w-1'>No Of Pax</div>
            <div className='column w-1'>Session Status</div>
        </div>
    )
}
