import React, { useState } from 'react'
import Post from '../../Post.js'
import { useRouteProtector } from '../../use-route-protector.js'

export default function Faq() {
    useRouteProtector()
    
    const [heading, setHeading] = useState('')
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [paragraph, setParagraph] = useState('')

    const [questions, setQuestions] = useState(
        [
            {
                heading: 'This is was funny',
                author: 'Homeer Simpson',
                title: 'Node.js',
                posted_date: 'posted on , thursday, November 28th 2022, 16:38 pm',
                paragraph: `sample paragrap, just for class work.`
            },
            // {
            //     heading: 'Java,eh!',
            //     author: 'Homeer Simpson1',
            //     title: 'java',
            //     posted_date: 'posted on , thursday, November 28th 2022, 16:38 pm',
            //     paragraph: `sample paragrap, just for class work.`
            // },
            // {
            //     heading: 'React???',
            //     author: 'Homeer Simpson2',
            //     title: 'python',
            //     posted_date: 'posted on , thursday, November 28th 2022, 16:38 pm',
            //     paragraph: `sample paragrap, just for class work.`
            // },
            // ,
            // {
            //     heading: 'Java,eh!',
            //     author: 'Homeer Simpson1',
            //     title: 'java',
            //     posted_date: 'posted on , thursday, November 28th 2022, 16:38 pm',
            //     paragraph: `sample paragrap, just for class work.`
            // }
        ])


    const AddQuestion = () => {
        let copy = questions.concat([]) // creating a copy

        let object = {
            heading: heading,
            author: author,
            title: title,
            paragraph: paragraph
        }

        copy.push(object)

        setQuestions(copy)
    }

    return (
        <div>
            <div>
                <label>Heading</label><input value={heading} onChange={e => setHeading(e.target.value)} />
            </div>
            <div>
                <label>Author</label><input value={author} onChange={e => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Title</label><input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Paragraph</label><input value={paragraph} onChange={e => setParagraph(e.target.value)} />
            </div>
            <button onClick={AddQuestion}>Add</button>
            <hr />
            {questions.map(x => <Post postedOn={x.posted_date} heading={x.heading} title={x.title} author={x.author} para={x.paragraph} />)}
        </div>
    )
}
