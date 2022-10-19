import React, { useState } from 'react'

export default function ParticipantButton({ count }) {

    const [expanded, setExpanded] = useState(false)

    const headingClicked = () => {
        if (expanded === true) {
            setExpanded(false)
        } else {
            setExpanded(true)
        }
    }

    return (
        <div className='button-container'>
            <span className='button-floating-count'>{count}</span>
            <span className='button-floating-arrow' onClick={headingClicked}>v</span>

            <i class="fa fa-users button-icon"></i>
            <div>Participants</div>


            {
                expanded == true && <div className='button-more-options'>
                    <p>Invite..</p>
                    <p>Copy Invite Link</p>
                </div>

            }
        </div>
    )
}
