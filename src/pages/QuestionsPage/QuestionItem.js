import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { commonPost } from '../../utilities.js'

export default function QuestionItem({ question, description, answers, id, username }) {
    const [answer, setAnswer] = useState('')

    const sendAnswer = () => {
        let obj = {
            answer: answer,
            username: localStorage.getItem('username')
        }

        commonPost(`http://localhost:3001/questions/${id}/answers`, obj)
            .then(response => {
                setAnswer('')
                if (response.status) {
                    alert('question created!')
                } else {
                    alert('something went wrong')
                }
            })

    }
    return (
        <div className='question-container'>
            <h3>{question}</h3>
            <h5>- {username}</h5>
            <p>{description}</p>
            <hr />
            <h4>Share your answer.</h4>
            <TextField label="Answer" variant="outlined" value={answer}
                onChange={e => setAnswer(e.target.value)} />
            <Button onClick={sendAnswer} variant="outlined">Send Answer</Button>
            <h4>Answers : </h4>
            {
                answers.map(x => <p>{x.answer} - {username}</p>)
            }
        </div>
    )
}
