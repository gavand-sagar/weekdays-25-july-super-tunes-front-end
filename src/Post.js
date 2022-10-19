import React from 'react'
import { useState } from 'react'

export default function Post({ heading, para, author, title, postedOn, Id, getAllPosts, likes, comments }) {

    const [comment, setComment] = useState('')

    const deleteMe = () => {
        fetch(`http://localhost:3001/posts/${Id}`,
            {
                method: 'DELETE'
            }
        ).then(x => x.json())
            .then(response => {
                //call parent function to refetch the data
                getAllPosts()
            })
    }

    const likePost = () => {
        fetch(`http://localhost:3001/posts/${Id}/like`)
            .then(s => s.json())
            .then(response => {
                getAllPosts()
            })
    }

    const dislikePost = () => {
        fetch(`http://localhost:3001/posts/${Id}/dislike`)
            .then(s => s.json())
            .then(response => {
                getAllPosts()
            })
    }

    const commentOnPost = () => {
        fetch(`http://localhost:3001/posts/${Id}/comments/${comment}`)
            .then(s => s.json())
            .then(response => {
                getAllPosts()
            })
    }

    const deleteComment = (cmt) => {
        fetch(`http://localhost:3001/posts/${Id}/comments/${cmt}`,
            {
                method: 'DELETE'
            }
        ).then(x => x.json())
            .then(response => {
                //call parent function to refetch the data
                getAllPosts()
            })
    }


    return (
        <div className="faq-container">
            <span className='right-top' onClick={deleteMe}><i class="fa fa-trash" aria-hidden="true"></i></span>

            <p>{para}</p>
            <div>
                <span className='light-shade-color'> By </span>
                <span className='blue'> {author} </span>
                <span className='light-shade-color'> {postedOn}</span>
            </div>
            <div>
                <span><i class="fa fa-thumbs-o-up" aria-hidden="true" onClick={likePost}></i>&nbsp;{likes}</span>
                &nbsp;
                &nbsp;
                <span><i class="fa fa-thumbs-o-down" aria-hidden="true" onClick={dislikePost}></i></span>
            </div>

            <div>
                <input
                    value={comment}
                    onChange={e => setComment(e.target.value)} />
                <button onClick={commentOnPost}>Comment</button>
            </div>

            <div>
                {comments.map(x => <p> <span>{x}</span>   <i onClick={() => deleteComment(x)} class="fa fa-trash-o" aria-hidden="true"></i>  </p>)}
            </div>

        </div>
    )
}
