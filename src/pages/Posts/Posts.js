import React, { useEffect, useState } from 'react'
import Post from '../../Post'
import { useRouteProtector } from '../../use-route-protector'

export default function Posts() {

    useRouteProtector();

    const [author, setAuthor] = useState('')
    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')


    const [posts, setPosts] = useState([])



    const getAllPosts = () => {
        fetch(`http://localhost:3001/posts`)
            .then(s => s.json())
            .then(response => {
                setPosts(response)
            })
    }

    const sentPost = () => {
        //send data to server

        fetch(`http://localhost:3001/posts?author=${author}&heading=${heading}&content=${content}`,
            {
                method: 'POST'
            }
        )
            .then(s => s.json())
            .then(response => {
                getAllPosts()
            })
    }

    useEffect(() => {
        //when this code will get executed?
        // only once at the component render
        getAllPosts()
    }, [])

    return (
        <div>
            <h3>Add new Post</h3>
            <div >
                <div>
                    <input placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)} />
                </div>
                <div><input placeholder='Heading' value={heading} onChange={e => setHeading(e.target.value)} /></div>
                <div><input placeholder='Content' value={content} onChange={e => setContent(e.target.value)} /></div>
                <div><button onClick={sentPost}>Send</button></div>
            </div>    
            <hr />
            <div className='post-container'>
                {posts.map(x => <Post 
                                    getAllPosts={getAllPosts} 
                                    heading={x.heading} 
                                    author={x.author} 
                                    para={x.content}
                                    Id={x.Id} 
                                    comments={x.comments}
                                    likes={x.likes}/>)}
            </div>
        </div>
    )
}
