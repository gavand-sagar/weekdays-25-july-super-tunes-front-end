import React, { useEffect, useState } from 'react'
import QuestionItem from './QuestionItem'
import { commonGet } from '../../utilities.js'
import { useRouteProtector } from '../../use-route-protector'

export default function QuestionsPage() {
    useRouteProtector()
    
    const [questions, setQuestions] = useState([])

    const getAllQuestions = () => {
        commonGet(`http://localhost:3001/questions`)
            .then(response => {
                setQuestions(response)
            })

    }
    useEffect(() => {
        getAllQuestions();
    }, [])
    return (
        <div>
            {
                questions.map(x =>
                    <QuestionItem
                        id={x.id}
                        question={x.question}
                        description={x.description}
                        username={x.username}
                        answers={x.answers} />)
            }
        </div>
    )
}
