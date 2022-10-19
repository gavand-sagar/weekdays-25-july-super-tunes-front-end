import React from 'react'

export default function UserTile({ name, isMuted, isSpeaking }) {
    return (
        <>
            <div className={isSpeaking == 'true' ? 'tile yellow-border' : 'tile'} >
                {name}


                <div className='tile-name-bottom'>

                    {
                        isMuted == 'true'
                            ? <i class="fa fa-microphone red"></i>
                            : <></>
                    }

                    &nbsp;
                    <span>{name}</span>
                </div>
            </div>
        </>
    )
}
