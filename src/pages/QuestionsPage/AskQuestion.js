import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { useRouteProtector } from '../../use-route-protector.js'
import { commonPost } from '../../utilities.js'
export default function AskQuestion() {
    useRouteProtector();

    const [question, setQuestion] = useState('')
    const [description, setDescription] = useState('')

    const sendQuestion = () => {

        let questionObj = {
            question: question,
            description: description,
            username: localStorage.getItem('username')
        }

        commonPost(`http://localhost:3001/questions`, questionObj)
            .then(response => {
                setQuestion('')
                setDescription('')
                alert('question created!')
            })
    }

    return (
        <div className='ask-question-page'>
            <div className='question-form'>
                <div>
                    <TextField label="Question" variant="outlined" value={question}
                        onChange={e => setQuestion(e.target.value)} />
                </div>
                <br/>
                <div>
                    <TextField
                        variant="outlined"
                        multiline={true}
                        rows={6}
                        label="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></TextField>
                </div>
                <br/>
                <div>
                    <Button variant="outlined" onClick={sendQuestion}>Ask Question</Button>
                </div>

            </div>
        </div>
    )
}
