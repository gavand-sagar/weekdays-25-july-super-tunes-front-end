import React from 'react'
import { useState } from 'react'
import ExpandCollapse from '../../ExpandCollapse'
import { useRouteProtector } from '../../use-route-protector'
import MuteButton from './MuteButton'
import ParticipantButton from './ParticipantsButton'
import SecurityButton from './SecurityButton'
import UserTile from './UserTile'

export default function Zoom() {
    useRouteProtector();
    const [users, SetUsers] = useState([
        {
            username: 'Timothy',
            isMuted: 'true'
        },
        {
            username: 'Sagar',
            isSpeaking: 'true',
            isMuted: 'false'
        },
        {
            username: 'Jonathan',
            isMuted: 'true'
        },
        {
            username: 'Kishor',
            isMuted: 'false'
        },
        {
            username: 'Amani',
            isMuted: 'false'
        },
        {
            username: 'Uzomoa',
            isMuted: 'true'
        },
        {
            username: 'Imad',
            isMuted: 'true'
        },
        {
            username: 'Marian',
            isMuted: 'false'
        },
        {
            username: 'Shilpah',
            isMuted: 'true'
        }
    ])
    
    return (
        <div>
            <div className='tiles-container'>
                {
                    users.map(item => <><UserTile name={item.username} isMuted={item.isMuted} isSpeaking={item.isSpeaking} /></>)
                }
            </div>
            <div className='buttons-container'>
                <MuteButton/>
                <SecurityButton/>
                <ParticipantButton count={7}/>
            </div>
        </div>
    )
}
